
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

// var trees = ajax object?? with all tree data mapped to tree name?
// including images??

var curr_info = "1";  // Track what is displayed in #info-window
var last_info = "0";

/* * * ON LOAD * * */

$(window).load(function(){
	// Size the poster overlay to match poster size (600:950)
	var poster_height = $("#poster").height();
	var poster_width = $("#poster").width();
	$("#markers-container").height(poster_height);
	
	// Position markers
	$("#1").css({left: '9%', top: '28%'});
	$("#2").css({right: '6%', top: '25%'});
	$("#3").css({left: '9%', top: '48%'});
	$("#4").css({right: '9%', top: '45%'});
	$("#5").css({left: '11%', top: '65%'});
	$("#6").css({right: '10%', top: '63%'});
	$("#7").css({left: '11%', top: '78%'});
	$("#8").css({right: '3%', top: '80%'});
	
	
	// Trigger info popup when any marker is clicked
	var id = "";
	for (marker in poster_key) {
		if(poster_key.hasOwnProperty(marker)) {
			id = "#"+marker;
			$(id).click(function(){
				// Position popup
				var marker_position = $(this).position();
				var left = marker_position.left;
				var top = marker_position.top;
				// Position info-window horizontally centered for small screens
				if($(window).width() <= 768) { 
					top = top + 48;
					$("#info-window").css({left: 'auto', top: top});
				} else {
				// Position info-window relative to marker for large screens
					if ( parseInt(this.id) % 2 === 0){
						left = left - ($("#info-window").width() + 35);
						$("#info-window").css({left: left, top: top});
					} else {
						left = left + 50;
						$("#info-window").css({left: left, top: top});
					}
				}
				// Display info-window
				var my_id = $(this).attr("id");
				last_info = curr_info;
				curr_info = my_id;
				//alert("last_info: "+last_info+", curr_info: "+curr_info);
				if ( last_info === curr_info ) {
					$("#info-window").toggle();
				} else {
					$("#info-window").css('display','block');	
				}
			});
		}
	}
	
	// Indicate active marker
	$(".tree-mark").click(function(){
		$(".tree-mark").not(this).removeClass("active");
		$(this).toggleClass("active");	
	});
			
	// Close info-window pop-up
	$(".close-window").click(function(){
		$(this).parent().toggle();
	});
	
});


/* * * ON RESIZE * * */

$(window).resize(function() {
	// Size the poster overlay to match poster size
	var poster_height = $("#poster").height();
	$("#markers-container").height(poster_height);	
});