/* Functions */

// Move footer down when page resizes
var bumpIt = function() { 
		var padding_bottom =  $('.footer').height();
  	$('.main').css('padding-bottom', padding_bottom);
	},
	didResize = false;

bumpIt();


/* * *  ON  LOAD * * */
$(window).load(function(){
	
	// Push content up above footer
	bumpIt();
});	