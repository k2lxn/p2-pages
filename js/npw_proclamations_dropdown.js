
// Load state proclamation thumbnail & caption and change links to PDF
function switchStateName(state) {
	// Update caption
	$('#current-state').html( state + ' proclaims June 20 - 26, 2016 Pollinator Week!');
}


/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){
	
	// Toggle #proclamations div when #procalmations-btn clicked
	$('#proclamations-btn').click(function() {
		$('#proclamations').slideToggle(400, function() {
			$('#proclamations-btn span').toggleClass('fa-chevron-circle-down');
			$('#proclamations-btn span').toggleClass('fa-chevron-circle-up');
			sizeThumbnails();
		});
	});

	// Add onclick functions to all the ul li's in #proclamations
	// Pass in the name of the class, which should be the state name formatted for display
	$('#proclamations ul li').click( function() {
		switchStateName( $( this ).attr('class') ); 
	});
	
	// Add tint to proclamation thumb on hover
	$('#proclamations span.thumb-sm').hover(
		function() { addBGTint( $(this), .3 ) },
		function() { addBGTint( $(this), 0 )}		
	);

}); 

