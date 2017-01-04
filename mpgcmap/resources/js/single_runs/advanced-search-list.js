$(document).ready(function() {
    $('#org_list').DataTable( {
        "ajax": {
            url: "https://massimpact.cartodb.com/api/v2/sql?q=SELECT%20*%20FROM%20mpgc_oct_import",
            type: "GET",
            dataSrc: "rows"
        },
        "columns": [
            { "data": "displayname" },
            { "data": "city" },
            { "data": "state_province" },
            { "data": "country" },
            { "data": "description" },
            { "data": "ref_organization" },
        ]
    } );
} );