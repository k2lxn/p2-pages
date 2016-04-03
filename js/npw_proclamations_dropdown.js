/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){
	
	// Toggle #proclamations div when #procalmations-btn clicked
	$('#proclamations-btn').click(function() {
		$('#proclamations').slideToggle(400, function() {
			$('#proclamations-btn span').toggleClass('fa-chevron-circle-down');
			$('#proclamations-btn span').toggleClass('fa-chevron-circle-up');
		});
	});

}); 


/*
 else {
				$('#proclamations-btn span').switchClass('fa-chevron-circle-up','fa-chevron-circle-down');
			}
		*/	