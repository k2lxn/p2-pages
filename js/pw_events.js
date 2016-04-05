

/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){ 
	var sql = new cartodb.SQL({ user: 'pollinatorpartner' });
	sql.execute("SELECT * FROM pollinator_week")
  	.done(function(data) {
    	console.log(data.rows);
    	
    	for (let event of data.rows) {
    		// Create Event Title button
    		$('#events_list').append(
    			"<button class='event-item btn'>"
    			+ "<h4>"+event.event_name+"</h4>"
    			+ "<span class='fa fa-chevron-circle-down'></span>"
    			+ "</button>"
    		);
    		// Create dropdown
    		$('#events_list').append(
    			"<div id='"+ event.cartodb_id + "' class='row event-info'>"
    			+ "<div class='col-sm-6'>"
    			+ "<p>"+event.description+"</p>"
    			+ "</div></div>"
    		);
    		// Add onclick function to Event Title button (button.event-item)
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


