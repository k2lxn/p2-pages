
var layer;
var input;
var map;
function main() {

    var layerUrl = 'https://massimpact.cartodb.com/api/v2/viz/029fb54e-ee43-11e5-8592-0e787de82d45/viz.json';

    cartodb.createVis('map', layerUrl)
        .on('done', function(vis, layer) {

            map = vis.getNativeMap().setView([39,-98],4);

        });

}
function search() {
    input_org = $( "#search_organization").val();
    console.log(input_org);

    var sql = new cartodb.SQL({ user: 'massimpact' });
    sql.getBounds("SELECT * FROM mpgc_users_submitted where displayname ilike '" + input_org +
        "'").done(function(bounds) {
        map.fitBounds(bounds)
        // restricts the map view to the given bounds
        //map.setMaxBounds(bounds)
    });

    sql.execute("SELECT * FROM mpgc_users_submitted where displayname ilike '" + input_org + "'")
        .done(function(data) {
            // do nothing
            for (var i = 0; i < data.total_rows; i++) {
                $('#results').append("<div class='entry'><h4><span>" +
                    data.rows[i].organization_name +
                    "</span></h4><h5>" +
                    data.rows[i].city +
                    ","+
                    data.rows[i].state_province +
                    "</div></h5>");
            }
        })
        .error(function(errors) {
            // do nothing
        })
}

function search2() {

    input_city = $( "#locality").val();
    console.log(input_city);

    input_state = $( "#administrative_area_level_1").val();
    console.log(input_state);

    var sql = new cartodb.SQL({ user: 'massimpact' });


    sql.getBounds("SELECT * FROM mpgc_users_submitted WHERE ((city iLIKE '" + input_city + "')) AND ((state_province iLIKE '" + input_state + "'))").done(function(bounds2) {
        map.fitBounds(bounds2)
        // restricts the map view to the given bounds
        //map.setMaxBounds(bounds2) (Enabling this will lock in search area to bounds
    });

    sql.execute("SELECT * FROM mpgc_users_submitted where city like '" + input_city +
            "'")
        .done(function(data) {
            // do nothing
            for (var i = 0; i < data.total_rows; i++) {
                $('#results').append("<div class='city_result'><h3>" +
                    data.rows[i].displayname +
                    "<p id='website_results'>"+
                    data.rows[i].website +
                    "</p></h3>" +
                    data.rows[i].city +
                    " "+
                    data.rows[i].description +
                    "</h5></span>"+
                    "</div></h5>");
            }
        })
        .error(function(errors) {
            // do nothing
        })

}


function search3() {

    input_username = $("#search_email").val();
    console.log(input_username);

    var sql = new cartodb.SQL({ user: 'massimpact' });
    sql.getBounds("SELECT * FROM mpgc_users_submitted where displayname ilike '" + input_username +
        "'").done(function(bounds2) {
        map.fitBounds(bounds2)
        // restricts the map view to the given bounds
        //map.setMaxBounds(bounds2) (Enabling this will lock in search area to bounds
    });

    sql.execute("SELECT * FROM mpgc_users_submitted where username like '" + input_username +
            "'")
        .done(function(data) {
            // do nothing
            for (var i = 0; i < data.total_rows; i++) {
                $('#results').append("<div class='city_result'><h3>" +
                    data.rows[i].displayname +
                    "<p id='website_results'>"+
                    data.rows[i].website +
                    "</p></h3>" +
                    data.rows[i].city +
                    " "+
                    data.rows[i].description +
                    "</h5></span>"+
                    "</div></h5>");
            }
        })
        .error(function(errors) {
            // do nothing
        })
}
// CartoDB SQL API Call
$.getJSON("https://massimpact.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM mpgc_users_submitted", function(data) {
    var geojson = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            // Add a popup or any other layer-related action
            layer.bindPopup("<h2>" + feature.properties.name + "</h2><hr><p>Population: " + feature.properties.pop_max + "</p>");
        }
    });
    markers.addLayer(geojson);

    // Build the map
    var map = L.map('map', {maxZoom: 14}).fitBounds(markers.getBounds());
    baseLayer.addTo(map);
    markers.addTo(map);
});

document.getElementById("search_organization").addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }

    // Enter is pressed
    if (e.keyCode == 13) { search(); }
}, false)



window.onload = main;

