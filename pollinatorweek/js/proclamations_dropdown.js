
// Load state proclamation thumbnail & caption and change links to PDF
function switchStateName(elem) {
	var state = elem.attr("class");
	// Update caption
	$('#current-state').html( state.replace(/_/g," ") + ' proclaims June 19 - 25, 2017 Pollinator Week!');
	
	// Update link to PDF
	var new_url = "../PDFs/NPW/2017/Proclamations/" + state + "_2017.pdf";
	$('#proclamations a').attr("href", new_url); 
	
	// Update thumbnail image
	var style = "";
	var curr_style = $('#proclamations span.thumb-sm').attr("style");
	var img_location = curr_style.match(/url\(+(.)+\)/)[0];
	var new_bg_style = "background-image:url(../Images/NPW/2017/proc_" + state + ".png)";
	var start_bg = curr_style.indexOf("background-image");
	if ( start_bg > 0 ) {    // Append new background-image to end (Chrome)
		curr_style = curr_style.substring(0,start_bg);
		style = curr_style + new_bg_style;
	}	else { // Append new background-image to front (Firefox)
		curr_style = curr_style.substring(curr_style.indexOf(";"));
		style = new_bg_style + curr_style;
	}
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

