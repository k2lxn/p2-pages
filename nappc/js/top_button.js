
/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){ 
 	// Hide 'to-top' button initially
 	$('a.to-top').hide();
 	// Hide it on click too
 	$('a.to-top').click(function(){$(this).hide();});
 	
 	/* Add onclick function to States navigation */ 
 	$(document).on('click', 'a.trigger-top-button', function(){
 		//alert("clicked");
 		$('a.to-top').show();
 	});
	
});