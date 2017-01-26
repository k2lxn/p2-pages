
/* * * ON  READY * * */
$(document).ready(function(){
	cartodb.createVis('map', 'https://pollinatorpartner.carto.com/api/v2/viz/81d82420-e3f9-11e6-a1ed-0ee66e2c9693/viz.json');
});	

/* * * ON  LOAD * * */	
$(window).load(function() {
	// Shrink on click popups for small screens
	if ( $(window).width() < 450 ) {
		$('div.cartodb-popup.v2').attr("style","width:220px"); // NOTE: cartoDB still overrides this
	}
});


/* * * RESIZE * * */
$(window).resize(function() {
	if ( $(window).width() < 450 ) {
		$('div.cartodb-popup.v2').attr("style","width:220px");
	}	else {
		$('div.cartodb-popup.v2').attr("style","width:300px");
	}
});



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
