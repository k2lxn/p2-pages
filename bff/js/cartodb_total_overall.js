
var sql = new cartodb.SQL({ user: 'massimpact' });
sql.execute("select sum(rows) as total_rows from (select count(*) as rows from nwf_locations union all select count(*) as rows from mpgc_users_submitted) as u")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#counter_overall').append("<div class='large_font'>" +
                data.rows[i].total_rows +
                "</div><h2 class='center_font'>Sites Registered</h2>");
        }
    })
    .error(function(errors) {
        // do nothing
    })
