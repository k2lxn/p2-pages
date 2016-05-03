

/* * * ON READY * * */

$(document).ready(function(){
	var poster_height = $("#poster").height();
	var poster_width = $("#poster").width();
	
	// Size the poster overlay to match poster size (600:950)
	$("#markers-container").height(poster_height);
	
	// Position markers
	$("#1").css({left: '11%', top: '28%'});
	$("#2").css({right: '8%', top: '25%'});
	
	
	// Add pop-ups
	var content_width = $("#info-window").width();
	$("#1").hover(
		function(){
			var marker_position = $(this).position();
			//alert(marker_position.left + ", " + marker_position.top);
			var left = marker_position.left + 50;
			var top = marker_position.top;
			$("#info-window").css({left: left, top: top}).html("Bigleaf Maple"); 
			content_width = $("#info-window").width(); 
			$("#info-window").width(content_width + 20);  // Add extra width for padding
			$("#info-window").toggle(); },
		function(){
			$("#info-window").toggle();
			$("#info-window").width(content_width);  // Remove width to avoid duplicate padding
	});
	
});


/* * * ON RESIZE * * */

$(window).resize(function() {
	// Size the poster overlay to match poster size
	var poster_height = $("#poster").height();
	$("#markers-container").height(poster_height);
});