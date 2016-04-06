
window.onload = function() { 
	cartodb.createVis('map', 'https://pollinatorpartner.cartodb.com/api/v2/viz/82b577dc-f87a-11e5-9a9c-0e5db1731f59/viz.json');
}		

function mapToPosition(position) {
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  map.setView(new L.LatLng(lat,lon), 7);
  new L.CircleMarker([lat,lon],{radius: 4}).addTo(map);
}

// credit: http://html5doctor.com/finding-your-position-with-geolocation/
function detectUserLocation(){
  if (navigator.geolocation) {
    var timeoutVal = 10 * 1000 * 1000;
    navigator.geolocation.watchPosition(
      mapToPosition, 
      alertError,
      { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
    );
  }
  else {
    alert("Geolocation is not supported by this browser");
  }

  function alertError(error) {
    var errors = { 
      1: 'Permission denied',
      2: 'Position unavailable',
      3: 'Request timeout'
    };
    alert("Error: " + errors[error.code]);
  }
}
