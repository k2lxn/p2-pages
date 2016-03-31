
var sql = new cartodb.SQL({ user: 'massimpact' });
sql.execute("SELECT COUNT(*) FROM nwf_locations")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#counter1').append("<div class='large_font'>" +
                data.rows[i].count +
                "</div><h2 class='center_font'>Pollinator Sites Registered</h2>");
        }
    })
    .error(function(errors) {
        // do nothing
    })
