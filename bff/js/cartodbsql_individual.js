
var map;
function init(){
    // initiate leaflet map
    map = new L.Map('map', {
        center: [40,-98],
        zoom: 4
    })

    L.tileLayer('https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png', {
        attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
    }).addTo(map);

    var layerUrl = 'https://massimpact.cartodb.com/api/v2/viz/305a2256-f2a5-11e5-9cc8-0e674067d321/viz.json';

    // change the query for the first layer
    var subLayerOptions = {
        sql: "SELECT * FROM mpgc_submissions_final where referring_organization like 'American Public Garden Association'",
        cartocss: "#mpgc_submissions_final {marker-fill: #109DCD; marker-width: 5; marker-line-color: white; marker-line-width: 0;}"
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
}
