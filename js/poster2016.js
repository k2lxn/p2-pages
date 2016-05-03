
var poster_key = { 
	'1': 'Bigleaf Maple',  
	'2': 'Tulip Tree',
	'3': 'Northern Catalpa',
	'4': 'Black Willow',
	'5': 'Southern Crabapple',
	'6': 'Staghorn Sumac',
	'7': 'Flowering Dogwood',
	'8': 'Eastern Redbud'
}

/* * * ON READY * * */

$(document).ready(function(){
	var poster_height = $("#poster").height();
	var poster_width = $("#poster").width();
	
	// Size the poster overlay to match poster size (600:950)
	$("#markers-container").height(poster_height);
	
	// Position markers
	$("#1").css({left: '11%', top: '28%'});
	$("#2").css({right: '8%', top: '25%'});
	$("#3").css({left: '11%', top: '48%'});
	$("#4").css({right: '11%', top: '45%'});
	$("#5").css({left: '13%', top: '65%'});
	$("#6").css({right: '12%', top: '63%'});
	$("#7").css({left: '11%', top: '78%'});
	$("#8").css({right: '3%', top: '80%'});
	
	// Add pop-ups
	var content_width = $("#info-window").width();
	
	for (var marker in poster_key) {
		if(poster_key.hasOwnProperty(marker)) {
			console.log(marker+": "+poster_key[marker]);
		}	
	}
/*	
	$('.tree-mark').hover(
		function(){
			// Get content from poster_key hash and size info-window
			$("#info-window").html(poster_key[this.id]);
			content_width = $("#info-window").width(); 
			alert("content_width: "+content_width);
			$("#info-window").width(content_width + 20);  // Add extra width for padding
			
			// Position info-window
			var marker_position = $(this).position();
			var left = marker_position.left + 50;
			var top = marker_position.top;
			if ( parseInt(this.id) % 2 === 0){
				var right = $("#markers-container").width() - left + content_width;
				$("#info-window").css({left: 'auto', right: right, top: top});
			} else {
				$("#info-window").css({left: left, right: 'auto', top: top});
			}
			
			// Display
			$("#info-window").toggle(); },
			
		function(){
			$("#info-window").toggle();
			$("#info-window").width(content_width);  // Remove width to avoid duplicate padding
	});
	
*/	
});


/* * * ON RESIZE * * */

$(window).resize(function() {
	// Size the poster overlay to match poster size
	var poster_height = $("#poster").height();
	$("#markers-container").height(poster_height);
});