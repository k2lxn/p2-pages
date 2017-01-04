
$(document).ready(function() {

    var sql_input = $('#sql_link').val();


    $('#org_list').DataTable( {

        "ajax": {
            url: "https://massimpact.cartodb.com/api/v2/sql?q=SELECT*FROM mpgc_database_nov WHERE ref_organization ilike '"+sql_input+"'",
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

    $('#state_list').DataTable( {
        "iDisplayLength": 50,

        "ajax": {
            url: "https://massimpact.cartodb.com/api/v2/sql?q=SELECT%20state_province,%20COUNT(*)%20AS%20%22num_states%22%20FROM%20mpgc_database_nov%20WHERE%20ref_organization%20ilike%20%27Daughters%20of%20the%20American%20Revolution%27%20GROUP%20BY%20state_province%20ORDER%20BY%20state_province%20ASC",
            type: "GET",
            dataSrc: "rows"
        },
        "columns": [
            { "data": "state_province" },
            { "data": "num_states" },
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
        sql: "SELECT * FROM mpgc_database_nov where ref_organization ilike '"+sql_input_1+"' or ref_organization ilike '"+sql_input_2+"'",
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
    sql.execute("SELECT COUNT(*) FROM mpgc_database_nov where ref_organization ilike '"+sql_input_1+"' or ref_organization ilike '"+sql_input_2+"'")
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

var sql_input_1 = $("#sql_input_1").val();
var sql_input_2 = $("#sql_input_2").val();

var sql = new cartodb.SQL({ user: 'massimpact' });

//United States

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND country like 'United States'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_usa').append("<div class='col-lg-6'><h2>" +
                data.rows[i].count +
                "</td><td> United States</td></tr>");
        }

    })

//Outside US
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND country not like 'United States'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_usa').append("<div class='col-lg-6'><h2>" +
                data.rows[i].count +
                "</td><td> Outside of United States</td></tr>");
        }

    })




//Script for geneating list
