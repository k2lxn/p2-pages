// Darken background images. Takes a DOM element and a number between 0 - 1 
function addBGTint(elem,tint) {
	var bg = elem.attr("style");
	var img_location = bg.match(/url\(+(.)+\)/)[0];
	var style = "background-image: linear-gradient(to right,rgba(0,0,0," + tint.toString() +"), rgba(0,0,0,"+tint.toString()+")), " + img_location;
	elem.attr("style",style);
}
function removeBGTint(elem) {
	var bg = elem.attr("style");
	var img_location = bg.match(/url\(+(.)+\)/)[0];
	var style = "background-image: " + img_location;
	elem.attr("style",style);
}

/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){
	// Push content up above footer
	$('.main').css('padding-bottom', $('.footer').height()); 
	
	// Add hover function to thumbnails
	if ($('.resources-thumb').length) {
		$('div.resources-thumb > a').hover(
			function() { addBGTint( $(this).prev(), .75 ) },
			function() { addBGTint( $(this).prev(), .3 )}		
		);
	}
}); 



/* * * * * * * * *
 * RESIZE  * * * *
 * * * * * * * * */
 
// Move footer down when page resizes
var bumpIt = function() {  
  	$('.main').css('padding-bottom', $('.footer').height());
	},
	didResize = false;

bumpIt();

// Set height of inline images
var sizeInlineImages = function() {
		$('.img-sm').height($('.img-sm').width() * (2/3));
		$('.figure-sm').height($('.figure-sm').width() * (2/3));
		$('.img-lg').height($('.img-lg').width() * (1/3));
		$('.figure-lg').height($('.figure-lg').width() * (1/3));
		$('div.resources-thumb').height($('div.resources-thumb').width() * (2/3));
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