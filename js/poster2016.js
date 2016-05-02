

/* * * ON READY * * */

$(document).ready(function(){
	var poster_height = $("#poster").height();
	var poster_width = $("#poster").width();
	
	// Size the poster overlay to match poster size (600:950)
	$("#markers-container").height(poster_height);
	
	// Position markers
	$("#1").css({left: '12%', top: '29%'});
	$("#2").css({right: '12%', top: '25%'});
});


/* * * ON RESIZE * * */

$(window).resize(function() {
	// Size the poster overlay to match poster size
	var poster_height = $("#poster").height();
	$("#markers-container").height(poster_height);
});