
// Load state proclamation thumbnail & caption and change links to PDF
function switchStateName(elem) {
	var state = elem.attr("class");
	// Update caption
	$('#current-state').html( state + ' proclaims June 20 - 26, 2016 Pollinator Week!');
	
	// Update link to PDF
	var new_url = "PDFs/NPW/2016/Proclamations/" + state + "_2016.pdf";
	$('#proclamations a').attr("href", new_url); 
	
	// Update thumbnail image
	var bg = $('#proclamations span.thumb-sm').attr("style");
	var img_location = bg.match(/url\(+(.)+\)/)[0];
	// Get substring from style attr: everything before 'background-image'
	var start_background_image_substr = bg.indexOf("background-image");
	// Reset style attribute
	var style = bg.substring(0,start_background_image_substr);
	style += "background-image:url(Images/NPW/2016/proc_" + state + ".png)";	
	$('#proclamations span.thumb-sm').attr("style", style);
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
		switchStateName( $( this ) ); 
	});
	
	// Add tint to proclamation thumb on hover
	$('#proclamations span.thumb-sm').hover(
		function() { addBGTint( $(this), .3 ) },
		function() { addBGTint( $(this), 0 )}		
	);

}); 

