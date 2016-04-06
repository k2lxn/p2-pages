

/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){ 
	var sql = new cartodb.SQL({ user: 'pollinatorpartner' });
	var last_state = "";  // For labeling sections by State
	
	/* Build the navigation */
	sql.execute("SELECT state FROM pollinator_week")
		.done(function(data) {
			console.log(data.rows);
		})
		.error(function(errors) {
    	// errors contains a list of errors
   	 console.log("errors:" + errors);
 	 });
	
	/*  Build the list */
	sql.execute("SELECT * FROM pollinator_week")
  	.done(function(data) {
    	console.log(data.rows);
    	
    	for (let event of data.rows) {
    		// check to see if new state section necessary
    		if (event.state !== last_state) {
    			$('#events_list').append("<h2>"+event.state+"</h2>");
    		}
    		
    		// Create Event Title button
    		$('#events_list').append(
    			"<button class='event-item btn'>"
    			+ "<h3>"+event.event_name+"</h3>"
    			+ "<span class='fa fa-chevron-circle-down'></span>"
    			+ "<div class='row'>"
    			+ "<div class='col-sm-6'><h4>"+event.city+"</h4></div>"
    			+ "<div class='col-sm-6'>"
    			+ "<h4>"+event.date+"</h4>"
    			+ "<h4>"+event.time+"</h4></div>"
    			+ "</div>"
    			+ "</button>"
    		);
    		// Create dropdown
    		$('#events_list').append(
    			"<div id='"+ event.cartodb_id + "' class='row event-info'>"
    			+ "<div class='col-sm-6'>"
    			+ "<p>"+event.description+"</p>"
    			+ "<p>"+event.more_info+"</p>"
    			+ "</div><div class='col-sm-6'>"
    			+ "<p class='label'>Location</p>"
    			+ "<p>"+event.location+"<br>"
    			+ event.city +"<br>"
    			+ event.state + ", "+ event.zip +"</p>"
    			+ "</div></div>"
    		);
    		
    		last_state = event.state;
    	}
    	
  	})
  	.error(function(errors) {
    	// errors contains a list of errors
   	 console.log("errors:" + errors);
 	 });
 	
 	/* Add onclick function to Event Title button (button.event-item) */ 
 	$(document).on('click', '.event-item', function(){
 		$(this).next('.event-info').slideToggle();	
 	});

});


/*
400, function() {
			$(this).children('span').toggleClass('fa-chevron-circle-down');
			$(this).children('span').toggleClass('fa-chevron-circle-up');
		}
*/


