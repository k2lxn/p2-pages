
var sql_input_1 = $("#sql_input_1").val();
var sql_input_2 = $("#sql_input_2").val();

var sql = new cartodb.SQL({ user: 'massimpact' });

//United States

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND country like 'United States'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_usa').append("<div class='col-lg-6'><h2>" +
                data.rows[i].count +
                "</td><td> United States</td></tr>");
        }

    })

//Outside US
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND country not like 'United States'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_usa').append("<div class='col-lg-6'><h2>" +
                data.rows[i].count +
                "</td><td> Outside of United States</td></tr>");
        }

    })

