

/* * * ON  READY * * */
$(document).ready(function(){
	
	// Add tint to link image on hover
	$('#link-to-OHPN').hover(
		function() { addBGTint( $(this), .3 ) },
		function() { addBGTint( $(this), 0 )}		
	);

}); 