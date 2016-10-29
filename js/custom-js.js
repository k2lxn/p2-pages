

/* Variables */
var navHeight = $("div#top-bar").height() + $("div.navbar-header").height(); 


/* Functions */

// Move footer down when page resizes
var bumpIt = function() { 
		var padding_bottom =  $('.footer').height();
  	$('.main').css('padding-bottom', padding_bottom);
	},
	didResize = false;

bumpIt();

// Set height of inline images
var sizeInlineImages = function() {
		$('.img-sm').height($('.img-sm').width() * (2/3));
		$('.figure-sm').height($('.figure-sm').width() * (2/3));
		$('.img-lg').height($('.img-lg').width() * (1/3));
		$('.figure-lg').height($('.figure-lg').width() * (1/3));
	},
	didResize = false;
	
sizeInlineImages();	

/* .thumb-sm: max-width:300; max-height:225; */
/* .thumb-md: max-width:500; max-height:375; */
var sizeThumbnails = function() {
		$('.thumb-sm').height(function() { 
			var curr_width = $( this ).width();
			var new_height = curr_width * (3/4);
			if( new_height < 225 ) {
				return new_height;
			} else {
				$(this).width(300);
				return 225;
			}
		});
		
		$('.thumb-md').height(function() { 
			var curr_width = $( this ).width();
			var new_height = curr_width * (3/4);
			if( new_height < 375 ) {
				return new_height;
			} else {
				$(this).width(500);
				return 375;
			}
		});
		
		$('div.resources-thumb').height($('div.resources-thumb').width() * (2/3));
	},
	didResize = false;
	
sizeThumbnails();

// Darken background images. Takes a DOM element and a number between 0 - 1 
function addBGTint(elem,tint) {
	var style="";
	if ( elem.attr("style") !== undefined ) {
		var curr_style = elem.attr("style");
		if ( curr_style.match(/url\(+(.)+\)/) ) {
			var img_location = curr_style.match(/url\(+(.)+\)/)[0];
			var new_bg_style = "background-image: linear-gradient(to right,rgba(0,0,0," + tint.toString()+"), rgba(0,0,0,"+tint.toString()+")), "+img_location;
			var start_bg = curr_style.indexOf("background-image");
			if ( start_bg > 0 ) {    // Append new background-image to end
				curr_style = curr_style.substring(0,start_bg);
				style = curr_style + new_bg_style;
			}	else { // Append new background-image to front
				curr_style = curr_style.substring(curr_style.indexOf(";"));
				style = new_bg_style + curr_style;
			}
		} else {
			style = curr_style;
		}	
	}
	elem.attr("style",style);
}


/* * * ON READY * * */
$(document).ready(function(){
 	
 	
});


/* * *  ON  LOAD * * */
$(window).load(function(){
	
	// Push content up above footer
	bumpIt();
	
	// Offset page scroll by height of nav bar if URL goes to an anchor
	if(window.location.href.match(/\#/)) {
		var target = $(window.location.href.substr(window.location.href.indexOf('#')));  // Get anchor from end of URL
		target = target.length ? target : $('[name= ' + this.hash.slice(1) + ']');
		if(target.length) {
			var scrollTo = target.offset().top - 30;
			scrollTo = $(window).width() <= 768 ? scrollTo : scrollTo - navHeight;
			$('html, body').animate({
				scrollTop: scrollTo
			}, 1000);
		}
	}
	
	// Smooth scrolling to Anchor Links
	$(document).on('click', 'a[href^="#"]', function(){ // for anchors inserted programmatically
		var target = $(this.hash);  // Get anchor from end of URL
		target = target.length ? target : $('[name= ' + this.hash.slice(1) + ']');
		if(target.length) {
			var scrollTo = target.offset().top - 30;
			scrollTo = $(window).width() <= 768 ? scrollTo : scrollTo - navHeight;
			$('html, body').animate({
				scrollTop: scrollTo
			}, 1000);
		}
	});

 	// Hide 'to-top' button on click too
 	$(document).on('click', 'a.to-top', function(){

 		$('a.to-top').hide();
 	});
 	// Add onclick function to all anchor links
 	$(document).on('click', "a[href^='#']:not(.to-top)", function(){
 		$('a.to-top').show();
 	});
	
	// Size thumbnails
	sizeInlineImages();
	sizeThumbnails();
	
	// Add hover function to thumbnails
	if ($('.resources-thumb').length) {
		$('div.resources-thumb > a').hover(
			function() { addBGTint( $(this).prev(), .75 ) },
			function() { addBGTint( $(this).prev(), .3 )}		
		);
	}
}); 



/* * * RESIZE  * * */
$(window).resize(function() {
	didResize = true;	
	bumpIt();
	sizeInlineImages();
	sizeThumbnails();
});


setInterval(function() {
	if(didResize){
		didResize = false;
		bumpIt();
		sizeInlineImages();
		sizeThumbnails();
	}
}, 250);



/* * * SCROLL * * */
 
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
 