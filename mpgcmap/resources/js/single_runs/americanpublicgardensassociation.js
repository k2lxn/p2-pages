//Script for creating the map

var map;
function init(){
    // initiate leaflet map
    map = new L.Map('map', {
        center: [40,-98],
        zoom: 4
    })

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
    }).addTo(map);

    var layerUrl = 'https://massimpact.carto.com/api/v2/viz/4bc4d980-94b4-11e6-8eb7-0e3ff518bd15/viz.json';

    // change the query for the first layer
    var subLayerOptions = {
        sql: "SELECT * FROM mpgc_database_nov where ref_organization ilike 'American Public Gardens Association'",
        cartocss: "#mpgc_database_nov {marker-fill: #ffce54; marker-width: 10; marker-line-color: white; marker-line-width: 0;}"
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
    sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE ref_organization iLIKE 'American Public Gardens Association'")
        .done(function(data) {
            // do nothing
            for (var i = 0; i < data.total_rows; i++) {
                $('#countertotal').append("<div class='large_font'>" +
                    data.rows[i].count +
                    "<p>Pollinator Sites</p>");
            }

        })
        .error(function(errors) {
            // do nothing
        })

    $(document).ready(function() {
        $('#org_list').DataTable( {
            "ajax": {
                url: "https://massimpact.cartodb.com/api/v2/sql?q=SELECT%20*%20FROM%20mpgc_oct_import%20where%20ref_organization%20ilike%20%27American%20Public%20Gardens%20Association%27",
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
};

//Script for geneating list
