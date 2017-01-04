
$(document).ready(function() {

    var sql_input = $('#sql_link').val();


    $('#org_list').DataTable( {
        "ajax": {
            url: "https://massimpact.cartodb.com/api/v2/sql?q=SELECT*FROM mpgc_database_nov",
            type: "GET",
            dataSrc: "rows"
        },
        "columns": [
            { "data": "displayname" },
            { "data": "city" },
            { "data": "state_province" },
            { "data": "country" },
            { "data": "description" },
            { "data": "ref_organization" },
        ]
    } );
} );


//Script for creating the map

var map;
function init(){
    // initiate leaflet map
    map = new L.Map('map', {
        center: [40,-98],
        zoom: 4
    })

    L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
    }).addTo(map);

    var layerUrl = 'https://massimpact.carto.com/api/v2/viz/c7c32244-b115-11e6-b1ec-0e3ff518bd15/viz.json';

    //Set the Perameters for the SQL Query

    var sql_input_1 = $('#sql_input_1').val();
    var sql_input_2 = $('#sql_input_2').val();

    // change the query for the first layer
    var subLayerOptions = {
        sql: "SELECT * FROM mpgc_database_nov",
        cartocss: "#mpgc_database_nov {marker-fill: #ffce54; marker-width: 20; marker-line-color: white; marker-line-width: 0;}"
    }

    cartodb.createLayer(map, layerUrl,{
        scrollwheel:false,
        cartodb_logo:false,
    })
        .addTo(map)
        .on('done', function(layer) {
            layer.getSubLayer(0).set(subLayerOptions);
        }).on('error', function() {
        //log the error
    });
    var sql = new cartodb.SQL({ user: 'massimpact' });
    sql.execute("SELECT COUNT(*) FROM mpgc_database_nov")
        .done(function(data) {
            // do nothing
            for (var i = 0; i < data.total_rows; i++) {
                $('#countertotal').append("<p id='counter_ind'>" +
                    data.rows[i].count +
                    " Sites</p>");
            }

        })
        .error(function(errors) {
            // do nothing
        })
};

//Script for geneating list
