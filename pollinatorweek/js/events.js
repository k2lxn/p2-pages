

/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){ 
	var sql = new cartodb.SQL({ user: 'pollinatorpartner' });
	var last_state = "";  // For labeling sections by State
	
	/* Build the navigation */
	sql.execute("SELECT DISTINCT state FROM pollinator_week")
		.done(function(data) {
			console.log(data.rows);
		})
		.error(function(errors) {
    	// errors contains a list of errors
   	 console.log("errors:" + errors);
 	 });
	
	/*  Build the list */
	sql.execute("SELECT * FROM pollinator_week ORDER BY state,city,zip")
  	.done(function(data) {
    	console.log(data.rows);
    	
    	for (let event of data.rows) {
    		// check to see if new state section necessary
    		if (event.state !== last_state) {
    			$('#events_list').append(
    				"<div class='divider'></div>"
    				+ "<h3>"+event.state+"</h3>"
    				);
    		}
    		
    		// Create Event Title button
    		$('#events_list').append(
    			"<button class='event-item btn'>"
    			+ "<div class='row'><h2>"+event.event_name+"</h2>"
    			+ "<span class='fa fa-chevron-circle-down'></span></div>"
    			+ "<div class='row'><h3>"+event.city
    			+ "<span class='highlight'>"+event.date.replace(/\/2016/,"")+"</span>"
    			+ "</h3></div></button>"		
    		);
    		// Create dropdown
    		$('#events_list').append(
    			"<div id='"+ event.cartodb_id + "' class='event-info'>"
    			+ "<div class='row'><div class='col-sm-8'>"
    			+ "<h4>Description</h4><p>"+event.description+"</p>"
    			+ "<p><i>"+event.more_info+"</i></p></div>"
    			+ "<div class='col-sm-4'>"
    			+ "<h4>Time</h4><p>"+event.date+", "+event.time+"</p>"
    			+ "<h4>Location</h4><p>"+event.location+"<br>"
    			+ event.city +"<br>"
    			+ event.state + ", "+ event.zip +"</p>"
    			+ "</div></div></div>"
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


