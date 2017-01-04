/**
 * Created by cmitguard on 3/24/16.
 */

var map;
function init(){
    // initiate leaflet map
    map = new L.Map('map', {
        center: [20,-20],
        zoom: 3
    })

    L.tileLayer('https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png', {
        attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
    }).addTo(map);

    var layerUrl = 'https://massimpact.cartodb.com/api/v2/viz/305a2256-f2a5-11e5-9cc8-0e674067d321/viz.json';

    var sublayers = [];

    cartodb.createLayer(map, layerUrl)
        .addTo(map)
        .on('done', function(layer) {
            // change the query for the first layer
            var subLayerOptions = {

                sql: "SELECT * from nwf_locations",
                cartocss: "#nwf_locations{marker-fill: #F84F40; marker-width: 8; marker-line-color: white; marker-line-width: 2; marker-clip: false; marker-allow-overlap: true;}"
            }

            var sublayer = layer.getSubLayer(0);

            sublayer.set(subLayerOptions);

            sublayers.push(sublayer);
        }).on('error', function() {
        //log the error
    });

    //we define the queries that will be performed when we click on the buttons, by modifying the SQL of our layer


    var LayerActions = {
        all: function(){
            sublayers[0].setSQL("SELECT * FROM nwf_locations");
            return true;
        },
        capitals: function(){
            sublayers[0].setSQL("SELECT * FROM nwf_locations WHERE organization_name like 'Monarch Joint Venture'");
            return true;
        },
        megacities: function() {
            sublayers[0].set({
                sql: "SELECT * FROM ne_10m_populated_places_simple WHERE megacity = 1'"
                //as it is said, you can also add some CartoCSS code to make your points look like you want for the different queries
                // cartocss: "#ne_10m_populated_places_simple{ marker-fill: black; }"
            });
            return true;
        }
    }

    $('.button').click(function() {
        $('.button').removeClass('selected');
        $(this).addClass('selected');
        //this gets the id of the different buttons and calls to LayerActions which responds according to the selected id
        LayerActions[$(this).attr('id')]();
    });
}