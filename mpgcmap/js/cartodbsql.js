
var layer;
var input;
var map;
function main() {

    var layerUrl = 'https://massimpact.cartodb.com/api/v2/viz/029fb54e-ee43-11e5-8592-0e787de82d45/viz.json';;

    cartodb.createVis('map', layerUrl)
        .on('done', function(vis, layer) {

            map = vis.getNativeMap().setView([39,-98],4);

        });

}
function search() {
    input_org = $( "#search_organization").val();
    console.log(input_org);

    var sql = new cartodb.SQL({ user: 'massimpact' });
    sql.getBounds("SELECT * FROM mgpc_basemap_copy where organization_name like '" + input_org +
        "'").done(function(bounds) {
        map.fitBounds(bounds)
        // restricts the map view to the given bounds
        map.setMaxBounds(bounds)
    });

    sql.execute("SELECT * FROM mgpc_basemap_copy where organization_name like '" + input_org + "'")
        .done(function(data) {
            // do nothing
            for (var i = 0; i < data.total_rows; i++) {
                $('#registerlist').append("<div class='entry'><h4><span>" +
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

    input_city = $( "#search_city").val();
    console.log(input_city);

    var sql = new cartodb.SQL({ user: 'massimpact' });
    sql.getBounds("SELECT * FROM mgpc_basemap_copy where city ilike '" + input_city +
        "'").done(function(bounds2) {
        map.fitBounds(bounds2)
        // restricts the map view to the given bounds
        //map.setMaxBounds(bounds2) (Enabling this will lock in search area to bounds
            });

    sql.execute("SELECT * FROM mgpc_basemap_copy where city like '" + input_city +
            "'")
        .done(function(data) {
            // do nothing
            for (var i = 0; i < data.total_rows; i++) {
                $('#registerlist').append("<div class='entry'><h4><span>" +
                    data.rows[i].organization_name +
                    "</span></h4><h5>" +
                    data.rows[i].city +
                    "<img src='/http://pollinator.org/images/logos/monarchpartnership.png'>"+
                    data.rows[i].referring_logo +"'>"+
                    "</div></h5>");
            }
            for (var i = 0; i < data.total_rows; i++) {
                $('#registerlist2').append("<img class='entry'><img src='" +
                    data.rows[i].referring_logo +
                    "</span></h4><h5>" +
                    data.rows[i].lat +
                    "<img src='https://pollinator.org/"+
                    data.rows[i].long +"'>"+
                    "</img></h5>");
            }
        })
        .error(function(errors) {
            // do nothing
        })
}
// CartoDB SQL API Call
$.getJSON("https://massimpact.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM mpgc_basemap", function(data) {
    var geojson = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            // Add a popup or any other layer-related action
            layer.bindPopup("<h2>" + feature.properties.name + "</h2><hr><p>Population: " + feature.properties.pop_max + "</p>");
        }
    });
    markers.addLayer(geojson);

    // Build the map
    var map = L.map('map', {maxZoom: 1}).fitBounds(markers.getBounds());
    baseLayer.addTo(map);
    markers.addTo(map);
});


window.onload = main;
