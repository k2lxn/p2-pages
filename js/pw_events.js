

/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){ 
	var sql = new cartodb.SQL({ user: 'pollinatorpartner' });
	sql.execute("SELECT * FROM pollinator_week")
  	.done(function(data) {
    	console.log(data.rows);
  	})
  	.error(function(errors) {
    	// errors contains a list of errors
   	 console.log("errors:" + errors);
 	 })

});