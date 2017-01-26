var state_abbreviations = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'American Samoa': 'AS',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District of Columbia': 'DC',
    'Federated States Of Micronesia': 'FM',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Guam': 'GU',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Marshall Islands': 'MH',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Northern Mariana Islands': 'MP',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Palau': 'PW',
    'Pennsylvania': 'PA',
    'Puerto Rico': 'PR',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virgin Islands': 'VI',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY',
    'Canada': 'Canada'
  }


/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){ 
	var sql = new cartodb.SQL({ user: 'pollinatorpartner' });
	var last_state = "";  // For labeling sections by State
	
	/* Build the navigation */
	sql.execute("SELECT DISTINCT state FROM table_2017_pollinator_week")
		.done(function(data) {
			data.rows.sort(function(a,b){
				if (a.state > b.state) {
					return 1;
				}
				if (a.state < b.state) {
					return -1;
				}
				return 0;
			});
			//console.log(data.rows);
			
			for (var i=0; i < data.rows.length; i++) { // Remove Canada link
				if (data.rows[i].state === "Canada") {
					data.rows.splice(i,1);
				}
			}
			// Construct unordered list
			for (var i=0; i < data.rows.length; i++) {
				$('#states-nav').append(
					"<li><a href='#"+data.rows[i].state.replace(/\s/g,"-")
					+"'>"+state_abbreviations[data.rows[i].state]+"</a></li>"
				);
			}
			// Add Canada link back in
			$('#states-nav').append("<li><a href='#Canada'>Canada</a></li>");
		})
		.error(function(errors) {
    	// errors contains a list of errors
   	 console.log("errors:" + errors);
 	 });
	
	/*  Build the list */
	sql.execute("SELECT * FROM table_2017_pollinator_week ORDER BY state,city,zip")
  	.done(function(data) {
    	console.log(data.rows); 	
    	for (var i=0; i < data.rows.length; i++) {
    		var event = data.rows[i];
    		if (event.state !== last_state) { // Check to see if new state section necessary
    			$('#events_list').append(
    				"<div class='divider'></div>"
    				+ "<h3 id="+event.state.replace(/\s/g,"-")
    				+">"+event.state+"</h3>"
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
    			+ state_abbreviations[event.state] + ", "+ event.zip +"</p>"
    			+ "</div></div></div>"
    		);
    		
    		last_state = event.state;
    	}
    	
  	})
  	.error(function(errors) {
    	// errors contains a list of errors
   	 console.log("errors:" + errors);
 	 });
 	
 	// Hide 'to-top' button initially
 	$('a.to-top').hide();
 	// Hide it on click too
 	$('a.to-top').click(function(){$(this).hide();});
 	
 	/* Add onclick function to States navigation */ 
 	$(document).on('click', '#states-nav a', function(){
 		//alert("clicked");
 		$('a.to-top').show();
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













