/**
 * Read values coming from the form
 */
function onFormSubmission(e) {
    Logger.log("data!");
    /**
     * Use Google services to get coordinates from a locality string
     */
    //Georeference the submission
    var loc = geocode(e.namedValues.location);
    Logger.log("lat: "+loc.lat+", lon: "+loc.lng);
    /**
     * Use our own function to post to our table
     */
    postToCartoDB(
        e.namedValues.
            e.namedValues.name,
        e.namedValues.email,
        e.namedValues.location,
        e.namedValues.number,
        e.namedValues.city,
        e.namedValues.zip,
        e.namedValues.country,
        e.namedValues.displayname_organizationname,
        e.namedValues.state_province,
        e.namedValues.description,
        e.namedValues.org_website,
        e.namedValues.org_type,
        e.namedValues.site_type,
        e.namedValues.forage,
        e.namedValues.farm_type,
        e.namedValues.beekeeping_type,
        e.namedValues.forage_percentage,
        e.namedValues.nesting_bees,
        e.namedValues.water_source,
        e.namedValues.plants_grown,
        e.namedValues.crops_grown,
        e.namedValues.certifications,
        loc.lat,
        loc.lng
    );
}


/**
 *
 * Geocode using Google's services
 */
function geocode(location) {
    var response = UrlFetchApp.fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+escape(location)+"&sensor=false"+"&key=AIzaSyA8711hoD_S69jvxS0w3vkXfhazNwM38gA");
    var respObj=Utilities.jsonParse(response.getContentText());

    var loc = {lat:NaN,lng:NaN};
    Logger.log("initialize loc in geocode ... loc: "+loc);
    try {
        loc = respObj.results[0].geometry.location
        Logger.log("from respObj ... loc: "+loc);
    } catch(e) {
        Logger.log("Error geocoding: "+location);
    }
    return loc;
}

/**
 * Insert Website into CartoDB
 */
function postToCartoDB(name,email,location,number,city,zip,country,displayname_organizationname,state_province,description,org_website,site_type,forage,farm_type,beekeeping_type,forage_percentage,nesting_bees,water_source,plants_grown,crops_grown,certifications,latitude,longitude) {
    Logger.log("posting to CartoDB");

    /**
     * Keep your key private!
     */
    var cartodb_host = "massimpact.cartodb.com";   //Your CartoDB domain
    var cartodb_api_key = "1ef267121b59b3ef6b363a4a9d727204c2b11e15";  //Your CartoDB API KEY

    /**
     * Insert NULL as the_geom if no Location is provided
     */
    var loc = "";
    if (latitude && longitude) {
        Logger.log("latitude && longitude present");
        loc = "CDB_LatLng("+latitude+","+longitude+")";
    } else {
        Logger.log("Setting loc to null");
        loc="null";
    }
    Logger.log("loc: "+loc);

    /**
     * Remove all single quotes

     displayname = displayname.replace("'","''");
     description = description.replace("'","''");
     */
    /**
     * Here is the INSERT statement
     */
    var query = "INSERT INTO bff_submission (name,email,location,number,city,zip,country,displayname_organizationname,state_province,description,org_website,site_type,forage,farm_type,beekeeping_type,forage_percentage,nesting_bees,water_source,plants_grown,crops_grown,certifications,latitude,longitude,the_geom) VALUES('"+name+"','"+email+"','"+location+"','"+number+"','"+city+"','"+zip+"','"+country+"','"+displayname_organizationname+"','"+state_province+"','"+description+"','"+org_website+"','"+site_type+"','"+forage+"','"+farm_type+"','"+beekeeping_type+"','"+forage_percentage+"','"+nesting_bees+"','"+water_source+"','"+plants_grown+"','"+crops_grown+"','"+certifications+"','"+latitude+"','"+longitude+"',"+loc+")";

    Logger.log("SQL: "+query);


    /**
     * Assemble the POST parameters
     */
    var options = {
        "method" : "post",
        "payload" : {q:query,api_key:cartodb_api_key},
        muteHttpExceptions : true
    };

    /**
     * Ship It
     */
    var response = UrlFetchApp.fetch("https://"+cartodb_host+"/api/v1/sql", options);
    var respObj=Utilities.jsonParse(response.getContentText());
    Logger.log("CDB call result: "+response.getContentText());

}