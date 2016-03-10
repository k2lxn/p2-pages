
$(document).ready(function(){
	// Push content up above footer
	$('.main').css('padding-bottom', $('.footer').height()); 
	
	// Set height of inline images
	$('.img-sm')
}); 


// Move footer down when page resizes
var bumpIt = function() {  
  	$('.main').css('padding-bottom', $('.footer').height());
	},
	didResize = false;

bumpIt();

$(window).resize(function() {
	didResize = true;
});

setInterval(function() {
	if(didResize){
		didResize = false;
		bumpIt();
	}
}, 250);