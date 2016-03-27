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

/* Variables */
var navHeight = $("div#top-bar").height() + $("div.navbar-header").height(); 



/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){
	
	// Push content up above footer
	$('.main').css('padding-bottom', $('.footer').height()); 
	
	// Anchor Links
	$('a[href^="#"]').click(function(){
		var target = $(this.hash);
		target = target.length ? target : $('[name= ' + this.hash.slice(1) + ']');
		if(target.length) {
			var scrollTo = target.offset().top - 30;
			scrollTo = $(window).width() <= 768 ? scrollTo : scrollTo - navHeight;
			$('html, body').animate({
				scrollTop: scrollTo
			}, 1000);
		}
	});
	
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



/* * * * * * * * *
 * SCROLL  * * * *
 * * * * * * * * */
 
// Hide/show toggle button on scroll
var position, direction, previous;
$(window).scroll(function() {

if($(window).width() <= 768 ) {

	if( $(this).scrollTop() >= position ) {
  	direction = 'down';
  	if( $(this).scrollTop() > navHeight ) {
    	if(direction !== previous) {
    		$('nav.site-header').addClass('hide');
      	previous = direction;
      	navHeight = 0;
     	}
    }	else {
    	$("nav.site-header").offset({top: -$(this).scrollTop()});
    }
  } else {
     direction = 'up';
     $("nav.site-header").css("top", "0");
     if(direction !== previous){
     	$('nav.site-header').removeClass('hide');
     	previous = direction;
     	navHeight = $("div#top-bar").height() + $("div.navbar-header").height(); 
     }
  }
	position = $(this).scrollTop(); 
	
}	
}); 
 