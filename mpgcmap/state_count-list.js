

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
    .error(function(errors) {
        // do nothing
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
    .error(function(errors) {
        // do nothing
    })



//Alabama

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'AL'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Alabama</td></tr>");
        }

    })

//Alaksa

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'AK'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Alaska</td></tr>");
        }

    })
//Arizona

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'AZ'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Arizona</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
//Arkansas

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'AR'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Arkansas</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

//California

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'CA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>California</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

//Colorado

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'CO'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Colorado</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

//Conneticut

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'CT'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Conneticut</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'DE'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Deleware</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'DC'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>DC</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'FL'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Florida</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'GA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Georgia</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'HI'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Hawaii</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'ID'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Idaho</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'IL'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Illinois</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'IN'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Indiana</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })


sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'IA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Iowa</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'KS'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Kansas</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'KY'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Kentucky</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })


sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'LA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Louisiana</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'ME'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Maine</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'MD'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Maryland</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'MA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Massachusetts</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'MI'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Michigan</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'MN'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Minnesota</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'MS'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Mississippi</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'MO'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Missouri</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })


sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'MT'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Montana</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'NE'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Nebraska</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'NV'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Nevada</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'NH'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>New Hampshire</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'NJ'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>New Jersey</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'NM'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>New Mexico</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'NY'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>New York</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'NC'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>North Carolina</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'ND'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>North Dakota</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'OH'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Ohio</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'OK'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Oklahoma</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'OR'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Oregon</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'PA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Pennsylvania</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'RI'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Rhode Island</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'SC'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>South Carolina</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'SD'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>South Dakota</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'TN'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Tennessee</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'TX'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Texas</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'UT'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Utah</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'VT'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Vermont</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'VA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Virginia</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'WA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Washington</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'WV'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>West Virginia</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'WI'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Wisconsin</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE (ref_organization iLIKE '"+sql_input_1+"' or ref_organization iLIKE '"+sql_input_2+"') AND state_province like 'WY'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<tr><td>" +
                data.rows[i].count +
                "</td><td>Wyoming</td></tr>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
