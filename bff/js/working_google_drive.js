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
        e.namedValues.location,
        e.namedValues.displayname,
        e.namedValues.timestamp,
        e.namedValues.description,
        loc.lat,
        loc.lng
    );
}

/**
 * Geocode using Google's services
 */
function geocode(address) {
    var response = UrlFetchApp.fetch("http://maps.googleapis.com/maps/api/geocode/json?address="+escape(address)+"&sensor=false");
    var respObj=Utilities.jsonParse(response.getContentText());

    var loc = {lat:NaN,lng:NaN};
    Logger.log("initialize loc in geocode ... loc: "+loc);
    try {
        loc = respObj.results[0].geometry.location
        Logger.log("from respObj ... loc: "+loc);
    } catch(e) {
        Logger.log("Error geocoding: "+address);
    }
    return loc;
}

/**
 * Insert Website into CartoDB
 */
function postToCartoDB(location,displayname,timestamp,description,latitude,longitude) {
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


     location = location.replace("'","''");
     displayname = displayname.replace("'","''");
     /**
     * Here is the INSERT statement
     */
    var query = "INSERT INTO mpgc_userdata(location,displayname,timestamp,description,the_geom) VALUES('"+location+"','"+displayname+"','"+timestamp+"','"+description+"',"+loc+")";

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