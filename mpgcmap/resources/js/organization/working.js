$(document).ready(function() {
    $('#org_list').DataTable( {
        "ajax": {
            url: "https://massimpact.cartodb.com/api/v2/sql?q=SELECT*FROM%20mpgc_oct_import",
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
            {"defaultContent": "<div id='advanced_search'>Hello</div>"}
        ],

        "columnDefs": [ {
            "targets": 0,
            "data": "displayname",
            "render": function ( data, type, full, meta ) {
                return '<a id="search_organization" onclick="search()">'+data+'</a>';
            }
        } ]

    } );
} );


//Script for geneating list
