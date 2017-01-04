

var sql_input_1 = $("#sql_input_1").val();
var sql_input_2 = $("#sql_input_2").val();

var sql = new cartodb.SQL({ user: 'massimpact' });

//United States

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE country like 'United States'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_usa').append("<div class='col-lg-6'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'> United States</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

//Outside US
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE country not like 'United States'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_usa').append("<div class='col-lg-6'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'> Outside of United States</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })



//Alabama

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'AL'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Alabama</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'AK'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Alaska</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'AZ'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Arizona</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'AR'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Arkansas</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'CA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>California</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'CO'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Colorado</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'CT'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Conneticut</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'DE'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Deleware</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'DC'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>DC</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'FL'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Florida</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'GA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Georgia</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'HI'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Hawaii</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'ID'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Idaho</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'IL'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Illinois</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'IN'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Indiana</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })


sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'IA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Iowa</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'KS'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Kansas</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'KY'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Kentucky</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })


sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'LA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Louisiana</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'ME'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Maine</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'MD'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Maryland</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'MA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Massachusetts</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'MI'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Michigan</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'MN'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Minnesota</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'MS'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Mississippi</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'MO'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Missouri</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })


sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'MT'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Montana</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'NE'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Nebraska</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'NV'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Nevada</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'NH'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>New Hampshire</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'NJ'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>New Jersey</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'NM'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>New Mexico</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'NY'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>New York</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'NC'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>North Carolina</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'ND'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>North Dakota</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'OH'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Ohio</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'OK'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Oklahoma</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'OR'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Oregon</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'PA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Pennsylvania</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'RI'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Rhode Island</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'SC'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>South Carolina</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'SD'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>South Dakota</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'TN'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Tennessee</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'TX'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Texas</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'UT'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Utah</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'VT'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Vermont</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'VA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Virginia</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'WA'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Washington</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })

sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'WV'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>West Virginia</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'WI'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Wisconsin</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
sql.execute("SELECT COUNT(*) FROM mpgc_database_nov WHERE state_province like 'WY'")
    .done(function(data) {
        // do nothing
        for (var i = 0; i < data.total_rows; i++) {
            $('#countertotal_ca').append("<div class='state_box col-lg-2'><h2>" +
                data.rows[i].count +
                "</h2><h5 class='center_font'>Wyoming</h5></div>");
        }

    })
    .error(function(errors) {
        // do nothing
    })
