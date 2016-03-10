
$(document).ready(function(){
	// Push content up above footer
	$('.main').css('padding-bottom', $('.footer').height()); 
}); 


// Move footer down when page resizes
var bumpIt = function() {  
  	$('.main').css('padding-bottom', $('.footer').height());
	},
	didResize = false;

bumpIt();

// Set height of inline images
var sizeInlineImages = function() {
		$('.img-sm').height($('.img-sm').width() * (2/3));
		$('.img-lg').height($('.img-lg').width() * (1/3));
	},
	didResize = false;
	
sizeInlineImages();	


$(window).resize(function() {
	didResize = true;	
});

setInterval(function() {
	if(didResize){
		didResize = false;
		bumpIt();
		sizeInlineImages();
	}
}, 250);