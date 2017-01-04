var hello= "mpgc_database_nov";

$(document).ready(function() {
    $('#org_list').DataTable( {
        "ajax": {
            url: "https://massimpact.cartodb.com/api/v2/sql?q=SELECT*FROM%20"+hello+"",
            type: "GET",
            dataSrc: "rows"
        },
        "columns": [
            {"data": "displayname"},
            { "data": "city" },
            { "data": "state_province" },
            { "data": "country" },
            { "data": "description" },
            { "data": "ref_organization" },
        ],

    } );
} );


//Script for geneating list
