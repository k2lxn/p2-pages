
var sql = new cartodb.SQL({ user: 'massimpact' });
sql.execute("SELECT COUNT(*) FROM nwf_locations")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#counter_overall').append("<div class='large_font'>" +
                data.rows[i].count +
                "");
        }
    })
    .error(function(errors) {
        // do nothing
    })
