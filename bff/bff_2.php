<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>MPGC Map | Pollinator Partnership</title>

    <!-- Bootstrap -->
    <link href="css/custom/custom-bootstrap.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="css/font-awesome.css" rel="stylesheet">
    <link href="css/mapcss.css" rel="stylesheet">

    <!--CartoDB Mapping CSS and Scripts-->

    <link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v3/3.15/themes/css/cartodb.css" />

    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
    <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="css/map_custom.css"/>

    <!-- SUPER SCRIPT-->
    <script type="text/javascript">
        /**
         * @license
         *
         * H5F 1.1.1
         * See https://github.com/ryanseddon/H5F/ for details.
         *
         * Copyright (c) 2013 Ryan Seddon
         *
         * Permission is hereby granted, free of charge, to any person
         * obtaining a copy of this software and associated documentation
         * files (the "Software"), to deal in the Software without
         * restriction, including without limitation the rights to use,
         * copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the
         * Software is furnished to do so, subject to the following
         * conditions:
         *
         * The above copyright notice and this permission notice shall be
         * included in all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
         * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
         * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
         * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
         * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
         * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
         * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
         * OTHER DEALINGS IN THE SOFTWARE.
         */
        (function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof module&&module.exports?module.exports=t():e.H5F=t()})(this,function(){var e,t,a,i,n,r,l,s,o,u,d,c,v,p,f,m,b,h,g,y,w,C,N,A,E,$,x=document,k=x.createElement("input"),q=/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,M=/[a-z][\-\.+a-z]*:\/\//i,L=/^(input|select|textarea)$/i;return r=function(e,t){var a=!e.nodeType||!1,i={validClass:"valid",invalidClass:"error",requiredClass:"required",placeholderClass:"placeholder",onSubmit:Function.prototype,onInvalid:Function.prototype};if("object"==typeof t)for(var r in i)t[r]===void 0&&(t[r]=i[r]);if(n=t||i,a)for(var s=0,o=e.length;o>s;s++)l(e[s]);else l(e)},l=function(a){var i,r=a.elements,l=r.length,c=!!a.attributes.novalidate;if(g(a,"invalid",o,!0),g(a,"blur",o,!0),g(a,"input",o,!0),g(a,"keyup",o,!0),g(a,"focus",o,!0),g(a,"change",o,!0),g(a,"click",u,!0),g(a,"submit",function(i){return e=!0,t||c||a.checkValidity()?(n.onSubmit.call(a,i),void 0):(w(i),void 0)},!1),!v())for(a.checkValidity=function(){return d(a)};l--;)i=!!r[l].attributes.required,"fieldset"!==r[l].nodeName.toLowerCase()&&s(r[l])},s=function(e){var t=e,a=h(t),n={type:t.getAttribute("type"),pattern:t.getAttribute("pattern"),placeholder:t.getAttribute("placeholder")},r=/^(email|url)$/i,l=/^(input|keyup)$/i,s=r.test(n.type)?n.type:n.pattern?n.pattern:!1,o=p(t,s),u=m(t,"step"),v=m(t,"min"),b=m(t,"max"),g=!(""===t.validationMessage||void 0===t.validationMessage);t.checkValidity=function(){return d.call(this,t)},t.setCustomValidity=function(e){c.call(t,e)},t.validity={valueMissing:a,patternMismatch:o,rangeUnderflow:v,rangeOverflow:b,stepMismatch:u,customError:g,valid:!(a||o||u||v||b||g)},n.placeholder&&!l.test(i)&&f(t)},o=function(e){var t=C(e)||e,a=/^(input|keyup|focusin|focus|change)$/i,r=/^(submit|image|button|reset)$/i,l=/^(checkbox|radio)$/i,u=!0;!L.test(t.nodeName)||r.test(t.type)||r.test(t.nodeName)||(i=e.type,v()||s(t),t.validity.valid&&(""!==t.value||l.test(t.type))||t.value!==t.getAttribute("placeholder")&&t.validity.valid?(A(t,[n.invalidClass,n.requiredClass]),N(t,n.validClass)):a.test(i)?t.validity.valueMissing&&A(t,[n.requiredClass,n.invalidClass,n.validClass]):t.validity.valueMissing?(A(t,[n.invalidClass,n.validClass]),N(t,n.requiredClass)):t.validity.valid||(A(t,[n.validClass,n.requiredClass]),N(t,n.invalidClass)),"input"===i&&u&&(y(t.form,"keyup",o,!0),u=!1))},d=function(t){var a,i,r,l,s,u=!1;if("form"===t.nodeName.toLowerCase()){a=t.elements;for(var d=0,c=a.length;c>d;d++)i=a[d],r=!!i.attributes.disabled,l=!!i.attributes.required,s=!!i.attributes.pattern,"fieldset"!==i.nodeName.toLowerCase()&&!r&&(l||s&&l)&&(o(i),i.validity.valid||u||(e&&i.focus(),u=!0,n.onInvalid.call(t,i)));return!u}return o(t),t.validity.valid},c=function(e){var t=this;t.validationMessage=e},u=function(e){var a=C(e);a.attributes.formnovalidate&&"submit"===a.type&&(t=!0)},v=function(){return E(k,"validity")&&E(k,"checkValidity")},p=function(e,t){if("email"===t)return!q.test(e.value);if("url"===t)return!M.test(e.value);if(t){var i=e.getAttribute("placeholder"),n=e.value;return a=RegExp("^(?:"+t+")$"),n===i?!1:""===n?!1:!a.test(e.value)}return!1},f=function(e){var t={placeholder:e.getAttribute("placeholder")},a=/^(focus|focusin|submit)$/i,r=/^(input|textarea)$/i,l=/^password$/i,s=!!("placeholder"in k);s||!r.test(e.nodeName)||l.test(e.type)||(""!==e.value||a.test(i)?e.value===t.placeholder&&a.test(i)&&(e.value="",A(e,n.placeholderClass)):(e.value=t.placeholder,g(e.form,"submit",function(){i="submit",f(e)},!0),N(e,n.placeholderClass)))},m=function(e,t){var a=parseInt(e.getAttribute("min"),10)||0,i=parseInt(e.getAttribute("max"),10)||!1,n=parseInt(e.getAttribute("step"),10)||1,r=parseInt(e.value,10),l=(r-a)%n;return h(e)||isNaN(r)?"number"===e.getAttribute("type")?!0:!1:"step"===t?e.getAttribute("step")?0!==l:!1:"min"===t?e.getAttribute("min")?a>r:!1:"max"===t?e.getAttribute("max")?r>i:!1:void 0},b=function(e){var t=!!e.attributes.required;return t?h(e):!1},h=function(e){var t=e.getAttribute("placeholder"),a=/^(checkbox|radio)$/i,i=!!e.attributes.required;return!(!i||""!==e.value&&e.value!==t&&(!a.test(e.type)||$(e)))},g=function(e,t,a,i){E(window,"addEventListener")?e.addEventListener(t,a,i):E(window,"attachEvent")&&window.event!==void 0&&("blur"===t?t="focusout":"focus"===t&&(t="focusin"),e.attachEvent("on"+t,a))},y=function(e,t,a,i){E(window,"removeEventListener")?e.removeEventListener(t,a,i):E(window,"detachEvent")&&window.event!==void 0&&e.detachEvent("on"+t,a)},w=function(e){e=e||window.event,e.stopPropagation&&e.preventDefault?(e.stopPropagation(),e.preventDefault()):(e.cancelBubble=!0,e.returnValue=!1)},C=function(e){return e=e||window.event,e.target||e.srcElement},N=function(e,t){var a;e.className?(a=RegExp("(^|\\s)"+t+"(\\s|$)"),a.test(e.className)||(e.className+=" "+t)):e.className=t},A=function(e,t){var a,i,n="object"==typeof t?t.length:1,r=n;if(e.className)if(e.className===t)e.className="";else for(;n--;)a=RegExp("(^|\\s)"+(r>1?t[n]:t)+"(\\s|$)"),i=e.className.match(a),i&&3===i.length&&(e.className=e.className.replace(a,i[1]&&i[2]?" ":""))},E=function(e,t){var a=typeof e[t],i=RegExp("^function|object$","i");return!!(i.test(a)&&e[t]||"unknown"===a)},$=function(e){for(var t=document.getElementsByName(e.name),a=0;t.length>a;a++)if(t[a].checked)return!0;return!1},{setup:r}});

    </script>


    <!-- Page styles -->
    <style>
        body{
            background-color: white!important;
        }

        .freebirdSolidBackground {
            background-color: rgb(246,187,66);
            color: rgb(255, 255, 255);
        }

        .freebirdSolidFill {
            fill: rgb(246,187,66);
            stroke: rgb(246,187,66);r
        }

        h3 {
            margin-top: 30px;
        }
        small {
            margin-bottom: 20px;
        }

        .container-tall{
            margin-top:50px;
        }

        .guide-thumb {
            max-width: 90%;
            text-align: center;
        }
        .guide-thumb > figcaption {
            font-size: 18px;
            color: #CCC;
            background: #333;
            text-align: center;
            padding: 10px 0;
            margin: 15px 0 50px;
        }
        .guide-thumb > figcaption > a {
            color: inherit;
        }
        .guide-thumb > figcaption > a:hover,
        .guide-thumb > figcaption > a:focus {
            text-decoration: none;
            color: #f6bb42;
        }

    /*Image Upload Process*/
        body {
            font-family: sans-serif;
            background-color: #eeeeee;
        }

        .file-upload {
            background-color: #ffffff;
            width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        .file-upload-btn {
            width: 100%;
            margin: 0;
            color: #fff;
            background: #f6bb42;
            border: none;
            padding: 10px;
            border-radius: 4px;
            border-bottom: 4px solid #15824B;
            transition: all .2s ease;
            outline: none;
            text-transform: uppercase;
            font-weight: 700;
        }

        .file-upload-btn:hover {
            background: #1AA059;
            color: #ffffff;
            transition: all .2s ease;
            cursor: pointer;
        }

        .file-upload-btn:active {
            border: 0;
            transition: all .2s ease;
        }

        .file-upload-content {
            display: none;
            text-align: center;
        }

        .file-upload-input {
            position: absolute;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            outline: none;
            opacity: 0;
            cursor: pointer;
        }

        .image-upload-wrap {
            margin-top: 20px;
            border: 4px dashed #f6bb42;
            position: relative;
        }

        .image-dropping,
        .image-upload-wrap:hover {
            background-color: #f6bb42;
            border: 4px dashed #ffffff;
        }

        .image-title-wrap {
            padding: 0 15px 15px 15px;
            color: #222;
        }

        .drag-text {
            text-align: center;
        }

        .drag-text h3 {
            font-weight: 100;
            text-transform: uppercase;
            color: #15824B;
            padding: 60px 0;
        }

        .file-upload-image {
            max-height: 200px;
            max-width: 200px;
            margin: auto;
            padding: 20px;
        }

        .remove-image {
            width: 200px;
            margin: 0;
            color: #fff;
            background: #cd4535;
            border: none;
            padding: 10px;
            border-radius: 4px;
            border-bottom: 4px solid #b02818;
            transition: all .2s ease;
            outline: none;
            text-transform: uppercase;
            font-weight: 700;
        }

        .remove-image:hover {
            background: #c13b2a;
            color: #ffffff;
            transition: all .2s ease;
            cursor: pointer;
        }

        .remove-image:active {
            border: 0;
            transition: all .2s ease;
        }

        /*Custom CSS for Form*/

        .ss-form-entry {
            display: inline-block;
            margin-bottom: 20px;
        }

        .ss-item input {
            display: block;
            width: 80%;

            font-size: 24px;
        }

        .ss-form-entry {
            width: 90%;
        }

        input#autocomplete {
            display: block;
            width: 80%;
            font-size: 24px;
        }

        #mapping_section{
            display:none;
        }

        textarea#entry_1205797193 {
            width: 80%;
        }
        div {
            font-family: 'Roboto Slab';
        }
        .ss-q-help.ss-secondary-text {
            font-size: .9em;
            font-weight: 300;
        }
        .ss-q-title {
            font-size: 1.2em;
            margin-bottom: 5px;
        }
        .required-message {
            font-size: 10px;
            color: #f6bb42;
            /* float: right; */
            margin-right: 20%;
        }
        select {
            display: block;
            width: 80%;
        }
        input#ss-submit {
            width: 50%;
            height: 50px;
            margin-left: 25%;
            background-color: #f6bb42;
            color: white;
            font-family: Roboto Slab;
            font-weight: 400;
            font-size: 1.5em;
            text-transform: uppercase;
            border-width: 0px;
        }
        input#ss-submit:hover {
            background-color: #ffce54;
        }

        button.file-upload-btn {
            background: #f6bb42;
            border-bottom: #f6bb42;
        }
        .image-upload-wrap {
            border: 4px dashed #f6bb42;
        }
        .drag-text h3 {
            color: #f6bb42;
        }
        .drag-text h3:hover {
            color: white;
        }

        .image-dropping, .image-upload-wrap:hover {
            background-color: #f6bb42!important;
        }

        button.file-upload-btn:hover {
            background-color: #ffce54;
        }

        img#previewimage {
            max-height: 300px;
            margin: 20px;
            border-style: solid;
            border-width: 1px;
            border-color: #f6bb42;
        }

        #mydiv3, #mydiv2, #mydiv1, #hide1 {
            display: none;
        }

        a.btn.btn-primary.btn-lg.register {
            text-align: center;
            margin-left: 25%;
            margin-right: 25%;
            display: inline-block;
            width: 50%;
            margin-top: 20px;
        }







    </style>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div id="wrapper">

    <!-- Site Navigation
    ======================================================================= -->
    <nav class="site-header navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div id="top-bar">
                <div class="row">
                    <div class="col-sm-5 hidden-xs">
                        <h4><i class="fa fa-calendar"></i> Pollinator Week</h4>
                        <div id="counter" data-date="June 20, 2016">
                            <div class="timer-col">
                                <span id="days"></span>
                                <span class="timer-type">d</span>
                            </div>
                            <div class="timer-col">
                                <span id="hours"></span>
                                <span class="timer-type">h</span>
                            </div>
                            <div class="timer-col">
                                <span id="minutes"></span>
                                <span class="timer-type">m</span>
                            </div>
                            <div class="timer-col">
                                <span id="seconds"></span>
                                <span class="timer-type">s</span>
                            </div>
                        </div> <!-- end #counter -->
                    </div>

                    <!-- Google Search -->
                    <div class="col-sm-2 hidden-xs google-search-container">
                        <script>
                            (function() {
                                var cx = '002964769701314051310:upsfmgvjvqw';
                                var gcse = document.createElement('script');
                                gcse.type = 'text/javascript';
                                gcse.async = true;
                                gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
                                        '//cse.google.com/cse.js?cx=' + cx;
                                var s = document.getElementsByTagName('script')[0];
                                s.parentNode.insertBefore(gcse, s);
                            })();
                        </script>
                        <gcse:searchbox-only></gcse:searchbox-only>
                    </div>

                    <!-- Social Links/Call to Action -->
                    <div class="col-sm-5">
                        <ul class="call-to-action">
                            <li><a href="donate.htm">Donate Now</a></li>
                            <li><a href="../takeaction.htm">Join Us</a></li>
                        </ul>

                        <ul class="social-links vert-center">
                            <li>
                                <a href="http://www.facebook.com/ThePollinatorPartnership" target="_blank"><i class="fa fa-facebook-square"></i></a>
                            </li>
                            <li>
                                <a href="http://twitter.com/Pollinators" target="_blank"><i class="fa fa-twitter-square"></i></a>
                            </li>
                            <li>
                                <a href="http://www.youtube.com/user/PollinatorPartners" target="_blank"><i class="fa fa-youtube-square"></i></a>
                            </li>
                            <li>
                                <a href="https://plus.google.com/u/0/+PollinatorOrg/about" target="_blank"><i class="fa fa-google-plus-square"></i></a>
                            </li>
                        </ul>
                    </div>

                </div> <!-- end .row -->
            </div><!-- end #top-bar -->

            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-bran   d" href="/"><img src="images/PollinatorLogo-Tag2.png" alt="Pollinator Partnership logo"></a>
            </div>

            <div id="navbar" class="navbar-collapse collapse" aria-expanded="false"
                 style="height: 1px;">
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="../about.htm" class="dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">
                            Who we are
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <div class="dropdown-foot">
                                <span></span>
                                <span></span>
                            </div>
                            <li><a href="../about.htm">About us</a></li>
                            <li><a href="../wherewework.htm">Where we work</a></li>
                            <li><a href="pollination.htm">What are Pollinators?</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="../programs.htm">Our programs</a>
                    </li>
                    <li>
                        <a href="../guides.htm">Planting guides</a>
                    </li>
                    <li>
                        <a href="../takeaction.htm">Get involved</a>
                    </li>
                    <li>
                        <a href="../usefulresources.htm">Learning center</a>
                    </li>
                    <li class="dropdown">
                        <a href="shop.htm" class="dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">
                            Stuff
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <div class="dropdown-foot">
                                <span></span>
                                <span></span>
                            </div>
                            <li><a href="../beesmartapp.htm">App</a></li>
                            <li><a href="../books.htm">Books</a></li>
                            <li><a href="../brochures.htm">Brochures</a></li>
                            <li><a href="../cards.htm">Cards</a></li>
                            <li><a href="../pamphlets.htm">Pamphlets</a></li>
                            <li><a href="../posters.htm">Posters</a></li>
                            <li><a href="../beesmart_give.htm">School Garden Kit</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="../nappc/index.html">NAPPC</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End Site Navigation -->

    <!-- Start Page Header -->
    <div class="page-header" style="background-image: url(Images/hummingbirds/Broadtailed-Hummingbird-David-Inouye-banner.png)" title="https://www.flickr.com/photos/bmc_ecology/8591713625">
        <div class="container container-tall">
            <h1>Million Pollinator Garden Challenge Map</h1>
        </div>
    </div>

    <div class="double-border"></div>

    <!-- optional Page Navigation (for anchor links) -->
    <nav id="page-navbar" class="navbar navbar-static-top navbar-default">
        <div class="container">
            <div class="navbar-header">
                <div class="dropdown">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#page-nav" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                        Hummingbirds:
                    </button>
                </div>
            </div>
            <div id="page-nav" class="navbar-collapse collapse" aria-expanded="false">
                <ul class="nav navbar-nav">
                    <li class="hidden-xs">
                        <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                        <a id="inline_sub_menu" href="index.html">MPGC Map</a>
                    </li>
                    <li id="register_sub_menu"><a href="register_updated.php#form">Register</a></li>
                    <li><a href="search.html">Search</a></li>
                    <li><a href="partners.html#partners_section">Partners</a></li>
                    <li><a href="register_edit.php#form">Edit</a></li>
                </ul>
            </div>
        </div>
    </nav>


    <!-- Main page content -->

    <!--END NEW MAP-->

    <!-- Start of Standard Page Content-->

    <div class="container main">

        <div class="row">
            <div class="col-md-8" style="padding-bottom:50px">
                <h2><div class="heading-content">Register Your Site Today<span id="secondary_title">Powered by S.H.A.R.E</span></div></h2>
                <p class="lead">*Denotes a Required Field </p>

                <a class="btn btn-primary btn-lg register" href="register_edit.php#form">Click Here to Edit Existing Site</a>

                <!--START DATA TABLE-->



                <!--END DATA TABLE-->
                <!-- START FORM -->
                <!-- Change the width and height values to suit you best -->
                <div class="row google-form" id="google-form" class="tab-pane">
                    <script type="text/javascript">var submitted=false;</script>
                    <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {window.location='http://pollinator.org/mpgcmap/register_confirmed.php#confirmed_landing';}"></iframe>
                    <form action="https://docs.google.com/forms/d/e/1FAIpQLSffMJ-inRF8AqLTZeJbM_6sJXhLODfHp7ie3r5KzOmiJTbl8w/formResponse" id="ss-form" method="post" name="ss-form" target="hidden_iframe" onsubmit="submitted=true;">
                        <!--Field name-->
                        <div class="row">
                            <h3>Basic Information</h3>
                            <div class="col-lg-12">
                                <label>Your Name</label>
                                <div class="input-group">
                                    <input aria-label="name" class="ss-q-short" dir="auto" id="entry_437967957" name="entry.437967957" type="text">
                                </div>
                            </div>
                            <!--Field displayname_organization-->
                            <div class="col-lg-12">
                                <label>Displayname or Organization Name</label>
                                <div class="input-group">
                                    <input aria-label="name" class="ss-q-short" dir="auto" id="entry_11659729" name="entry.11659729" type="text">
                                </div>
                            </div>
                            <!--Field email-->
                            <div class="col-lg-12">
                                <label>Email</label>
                                <div class="input-group">
                                    <input aria-label="name" class="ss-q-short" dir="auto" id="entry_1128484042" name="entry.1128484042" type="text">
                                </div>
                            </div>
                            <!--Field Location-->
                            <label>Address</label>
                            <div class="input-group" id="locationField">
                                <input id="autocomplete" class="ss-q-short" dir="auto" onFocus="geolocate()" name="entry.1685082272" type="text">
                            </div>
                        </div>
                        <!--START BEE FRIENDLY FARMING LOCATION-->
                        <div class="row">
                            <!--Field Description-->
                            <div class="col-lg-12">
                                <label>Description</label>
                                <div class="input-group">
                                    <input aria-label="name" class="ss-q-short" dir="auto" id="entry_225097464" name="entry.225097464" type="text">
                                </div>
                            </div>
                            <!--Field Website-->
                            <div class="col-lg-12">
                                <label>Website</label>
                                <div class="input-group">
                                    <input aria-label="name" class="ss-q-short" dir="auto" id="entry_1624947770" name="entry.1624947770" type="text">
                                </div>
                            </div>
                            <!--Field Org_type-->
                            <div class="col-lg-12">
                                <label>How Would You Describe your Organization</label>
                                <div class="input-group">
                                    <ul aria-label="org_type" class="ss-choices list-unstyled" role="radiogroup">
                                        <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input aria-label=" Beekepper" class="ss-q-radio" id="group_75861461_1" name="entry.75861461" role="radio" type="radio" value="Beekepper"></span> <span class="ss-choice-label"> Beekepper</span></label></li>
                                        <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input aria-label=" Farmer" class="ss-q-radio" id="group_75861461_2" name="entry.75861461" role="radio" type="radio" value="Farmer"></span><span class="ss-choice-label"> Farmer</span></label></li>
                                        <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input aria-label=" Gardener" class="ss-q-radio" id="group_75861461_3" name="entry.75861461" role="radio" type="radio" value="Gardener"></span><span class="ss-choice-label"> Gardener</span></label></li>
                                    </ul>
                                </div>
                            </div>
                            <!--Field Site_type-->
                            <div class="col-lg-12">
                                <label>What type of site do you have</label>
                                <div class="input-group">
                                    <select aria-label="site_type" class="valid" id="entry_625360239" name=
                                    "entry.625360239">
                                        <option value="">
                                        </option>
                                        <option value="Farm">
                                            Farm
                                        </option>
                                        <option value="Ranch">
                                            Ranch
                                        </option>
                                        <option value="Timber/Forest">
                                            Timber/Forest
                                        </option>
                                        <option value="Home">
                                            Home
                                        </option>
                                        <option value="Corperation">
                                            Corperation
                                        </option>
                                        <option value="Ranch">
                                            Ranch
                                        </option>
                                        <option value="Vineward">
                                            Vineward
                                        </option>
                                        <option value="Beekeeping Operation">
                                            Beekeeping Operation
                                        </option>
                                        <option value="Utility">
                                            Utility
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <!--Field Forage-->
                            <div class="col-lg-12">
                                <label>What type of Forage do you Provide</label>
                                <div class="input-group">
                                    <select aria-label="forage" class="valid" id="entry_258472247" name=
                                    "entry.258472247">
                                        <option value="">
                                        </option>
                                        <option value="Bee- attractive flowering perrenials">
                                            Bee- attractive flowering perrenials
                                        </option>
                                        <option value="Berries">
                                            Berries
                                        </option>
                                        <option value=
                                                "Ground covers/cover crops (eg. clovers, mustard, vetch)">
                                            Ground covers/cover crops (eg. clovers, mustard, vetch)
                                        </option>
                                        <option value=
                                                "Restored native meadows, pollinator friendly wildlife plantings">
                                            Restored native meadows, pollinator friendly wildlife plantings
                                        </option>
                                        <option value="Bee-attractive flowering fallow crops">
                                            Bee-attractive flowering fallow crops
                                        </option>
                                        <option value="Flowering hedgerows">
                                            Flowering hedgerows
                                        </option>
                                        <option value="Flowering trees that provide nectar/pollen">
                                            Flowering trees that provide nectar/pollen
                                        </option>
                                        <option value=
                                                "Insectary garden (flowering plants grown to attract beneficial insects)">
                                            Insectary garden (flowering plants grown to attract beneficial insects)
                                        </option>
                                        <option value=
                                                "&quot;Weedy&quot; areas not managed (allowed to flower)">
                                            "Weedy" areas not managed (allowed to flower)
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <!--Field farm_type-->
                            <div class="col-lg-12">
                                <label>What type of farm do you have?</label>
                                <div class="input-group">
                                    <select aria-label="farm_type" class="valid" id="entry_913504629" name=
                                    "entry.913504629">
                                        <option value="">
                                        </option>
                                        <option value="Vegetable">
                                            Vegetable
                                        </option>
                                        <option value="Fruit">
                                            Fruit
                                        </option>
                                        <option value="Seed Crop">
                                            Seed Crop
                                        </option>
                                        <option value="Grain">
                                            Grain
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <!--Field beekeeping_type-->
                            <div class="col-lg-12">
                                <label>What type of beekeeping operation do you have?</label>
                                <div class="input-group">
                                    <select aria-label="beekeeping_type" id="entry_1300444498" name=
                                    "entry.1300444498">
                                        <option value="">
                                        </option>
                                        <option value="Hobby">
                                            Hobby
                                        </option>
                                        <option value="Large Professional Hives">
                                            Large Professional Hives
                                        </option>
                                        <option value="Small Professional Hives">
                                            Small Professional Hives
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <!--Field Forage Percentage-->
                            <div class="col-lg-12">
                                <label>Percentage of Field</label>
                                <div class="input-group">
                                    <input aria-label="name" class="ss-q-short" dir="auto" id="entry_2004090819" name="entry.2004090819" type="text">
                                </div>
                            </div>
                            <!--Field nesting_bees-->
                            <div class="col-lg-12">
                                <label>How do you provide for nesting bees?</label>
                                <div class="list-group">
                                    <select aria-label="nesting_bees" class="valid" id="entry_190627642" name=
                                    "entry.190627642">
                                        <option value="">
                                        </option>
                                        <option value="Undustrubed (untilled) ground [including bare soil, small cut banks and sand piles]">
                                            Undustrubed (untilled) ground [including bare soil, small cut banks and
                                            sand piles]
                                        </option>
                                        <option value="Dead trees/snags">
                                            Dead trees/snags
                                        </option>
                                        <option value=
                                                "Native bee nesting boxes (for example for mason or leafcutter bees)">
                                            Native bee nesting boxes (for example for mason or leafcutter bees)
                                        </option>
                                        <option value="Apiaries (managed honey bees)">
                                            Apiaries (managed honey bees)
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <!--Field water-->
                            <div class="col-lg-12">
                                <label>How do you provide water?</label>
                                <div class="input-group">
                                    <select aria-label="water_source" id="entry_692682573" name=
                                    "entry.692682573">
                                        <option value="">
                                        </option>
                                        <option value="River">
                                            River
                                        </option>
                                        <option value="Pond">
                                            Pond
                                        </option>
                                        <option value="Irrigation, rain water collection">
                                            Irrigation, rain water collection
                                        </option>
                                        <option value="Garden water features">
                                            Garden water features
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <!--Field Plants Grown-->
                            <div class="col-lg-12">
                                <label>What plants do you grow </label>
                                <div class="input-group">
                                    <input aria-label="name" class="ss-q-short" dir="auto" id="entry_1410746330" name="entry.1410746330" type="text">
                                </div>
                            </div>
                            <!--Field Plants Grown-->
                            <div class="col-lg-12">
                                <label>What crops do you grow </label>
                                <div class="input-group">
                                    <input aria-label="name" class="ss-q-short" dir="auto" id="entry_1204150701" name="entry.1204150701" type="text">
                                </div>
                            </div>
                            <!--Field Plants Grown-->
                            <div class="col-lg-12">
                                <label>What certifications do you have </label>
                                <div class="input-group">
                                    <input aria-label="name" class="ss-q-short" dir="auto" id="entry_1312023405" name="entry.1312023405" type="text">
                                </div>
                            </div>

                            <!--START ADD YOUR CONTENT-->
                            <div dir="auto" class="ss-item ss-section-header" id="content2"><div class="ss-form-entry">
                                    <h2 class="ss-section-title">Add Your Content</h2>
                                    <div class="ss-section-description ss-no-ignore-whitespace">This content may be used by the Pollinator Partnership or MPGC </div>
                                </div></div>
                            <!--START IMAGE UPLOAD-->

                            <!-- Button trigger modal -->
                            <div id="imagearea">
                                <div id='mydiv4'></div>

                                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                                    Upload Image
                                </button>

                            </div>

                            <!--END IMAGE UPLOAD-->
                        </div>

                        <!-- START HIDDEN LOCATION FIELDS-->
                        <div class="row" id="address" style="display:">
                            <!--Field number-->
                            <div class="col-lg-12">
                                <label>Number</label>
                                <div dir="auto" class="input-group">
                                    <input aria-label="name" class="field" dir="auto" id="street_number" name="entry.1631333922" type="text">
                                </div>
                            </div>
                            <!--Field city-->
                            <div class="col-lg-12">
                                <label>City</label>
                                <div class="input-group">
                                    <input aria-label="name" class="field" dir="auto" id="locality" name="entry.849492673" type="text">
                                </div>
                            </div>
                            <!--Field state_province-->
                            <div class="col-lg-12">
                                <label>State_Province</label>
                                <div class="input-group">
                                    <input aria-label="name" class="field" dir="auto" id="administrative_area_level_1" name="entry.728751769" type="text">
                                </div>
                            </div>
                            <!--Field zip-->
                            <div class="col-lg-12">
                                <label>Zip</label>
                                <div class="input-group">
                                    <input aria-label="name" class="filed" dir="auto" id="postal_code" name="entry.824856336" type="text">
                                </div>
                            </div>
                            <!--Field country-->
                            <div class="col-lg-12">
                                <label>Country</label>
                                <div class="input-group">
                                    <input aria-label="name" class="filed" dir="auto" id="country" name="entry.1788092065" type="text">
                                </div>
                            </div>
                        </div>

                        <!--PayPal Pay Option-->

                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="AHEJ7H5HQTZVQ">
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                        </form>


                        <!--Submit Button Start-->
                        <br>
                        <input type="submit" name="submit" value="Submit" id="ss-submit" class="jfk-button jfk-button-action ">

                    </form>

                    <p>&nbsp;</p>
                    <hr><h2 id="donate">Donate to the Bee Friendly Farming Program</h2>&nbsp;</p>
                    <p>Bee Friendly Farmers (BFF) works with farmers and beekeepers to improve the health of honey bees and support native pollinators. BFF fosters awareness and support for providing increased availability of flowering plants to honey bees and native pollinators. Donate to the Bee Friendly Farmer program below.<br><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick">
                        <input type="hidden" name="hosted_button_id" value="GML25KNHJEC3J">
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                    </form>


                    <br />
                    </p>
                    <p>
                        <br><br>
                    </p>
                    <!-- Modal -->
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Image Upload</h4>
                                </div>
                                <div class="modal-body">
                                    <form action="bff_registration.php#content2"  method="post" enctype="multipart/form-data">

                                        Select Image:
                                        <input type="file" name="image">
                                        <input type="submit" class="btn btn-primary btn-lg" name="upload" value="Upload Now">

                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end .main .col-sm-8 -->

            <!-- Sidebar -->
            <div class="col-sm-4" id="sidebar_right">
                <a href="http://millionpollinatorgardens.org/"><img id="logo_main" src="logo/mpgc.png"></a>
                <h3>Dig Deeper</h3>
                <div>
                    <a role="button" class="btn btn_1 btn-1 btn-sep icon-list" href="http://millionpollinatorgardens.org/">MPGC</a>
                    <a role="button" class="btn btn_1 btn-2 btn-sep icon-building" href="http://pollinator.org/pollinators.htm">Why Pollinators</a>
                    <a role="button" class="btn btn_1 btn-3 btn-sep icon-search" href="http://pollinator.org/guides.htm">Planting Guides</a>
                    <a role="button" class="btn btn_1 btn-4 btn-sep icon-email" href="http://www.gardencentermarketing.com/page/Pollinator-Garden-Challenge-Signage">Materials</a>
                </div>
            </div>  <!-- end .col-sm-4.sidebar -->

        </div>  <!-- end .main > .row -->

    </div> <!-- end .content.main -->

    <!-- End Body Content -->

    <!-- Site Footer
    ============================================================= -->
    <footer class="footer">
        <div class="row">
            <div class="container">
                <div class="col-sm-4">
                    <h4>Pollinator <span class="highlight">Partnership</span></h4>
                    <p>A non-profit 501(c)3 organization-- the largest in the world dedicated exclusively to the protection and promotion of pollinators and their ecosystems.</p>
                    <p><a href="PDFs/GRANTAWARDANDGIFTACCEPTANCEPOLICY0213.pdf">Our Giving Policy &nbsp;<i class="fa fa-angle-right"></i></a></p>
                </div>
                <div class="col-sm-4">
                    <h4>Twitter <span class="highlight">Feeds</span></h4>
                    <div class="twitter-widget" data-tweets-count="2"></div>
                </div>
                <div class="col-sm-4">
                    <h4>Contact <span class="highlight">Us</span></h4>
                    <p><a href="mailto:info@pollinator.org" target="_blank">info@pollinator.org</a></p>
                    <p>423 Washington Street, 5th Floor<br>San Francisco, CA, 94111</p>
                    <p>1(415)362-1137</p>
                </div>
            </div> <!-- end .container -->
        </div> <!-- end .row -->
        <div class="row well">
            <div class="container">
                <div class="col-sm-6">
                    <p id="copyright">© 1996-2016 Pollinator Partnership</p>
                </div>
                <div class="col-sm-6">
                    <ul class="nav" role="navigation">
                        <li><a href="/">Home</a></li>
                        <li><a href="../about.htm">About</a></li>
                        <li><a href="research_consulting.htm">Science & Consulting</a></li>
                        <li><a href="donate.htm">Donate</a></li>
                    </ul>
                </div>
            </div> <!-- end .container -->
        </div> <!-- end .row -->
    </footer>

</div> <!-- end #wrapper -->

<!--CartoDB Custom Body Scripts-->

<script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.js"></script>

<!--For Image Slider Slick-->

<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>

<script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="slick/slick.min.js"></script>
<script src="js/app.js"></script>
<script type="text/javascript" src="js/googleauto.js"></script>
<script type="text/javascript" src="js/imageupload.js"></script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQav82qqHPZc7A7C2Ui8YjWwaHXJoImEk&libraries=places&callback=initAutocomplete"
        async defer></script>

<script async="" type="text/javascript" charset="UTF-8" src="//www.gstatic.com/og/_/js/k=og.og.en_US.tqOlfx8vniA.O/rt=j/t=zcms/m=ld,gl,is,id,nb,nw,sb,sd,p,vd,awd,st,lod,eld,ip,dp,cpd,bd/exm=bt,base,bn,bu,cp,el,lo,sbi,ni,sf,up,dd,aw,iw,if,gi,vi,pi,eq,uc/d=1/ed=1/rs=AA2YrTuzX2J28aKWY3sJ-hHjV7KfoL5SqA"></script>


<script type="text/javascript" src="js/cartodb_total_overall.js"></script>

<script src="js/cartodbsql_search_final.js"></script>


<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQav82qqHPZc7A7C2Ui8YjWwaHXJoImEk&libraries=places&callback=initAutocomplete"
        async defer></script>

<!--FOR LOCAL STORAGE AFTER REFRESH-->
<script type="text/javascript">
    $(document).ready(function () {
        function init() {
            if (localStorage["entry.1553647671"]) {
                $('#entry_1553647671').val(localStorage["entry.1553647671"]);
            }
            if (localStorage["entry.1205797193"]) {
                $('#entry_1205797193').val(localStorage["entry.1205797193"]);
            }
            if (localStorage["entry.508366367"]) {
                $('#entry_508366367').val(localStorage["entry.508366367"]);
            }
            if (localStorage["entry.1414392500"]) {
                $('#entry_1414392500').val(localStorage["entry.1414392500"]);
            }
        }
        init();
    });

    $('.stored').keyup(function () {
        localStorage[$(this).attr('name')] = $(this).val();
    });

    $('#localStorageTest').submit(function() {
        localStorage.clear();
    });
</script>


<script>
    function copyDiv() {
        var firstDivContent = document.getElementById('mydiv1');
        var secondDivContent = document.getElementById('mydiv2');
        secondDivContent.innerHTML = firstDivContent.innerHTML;
    }

    //Call copyDiv on body="onload"
    copyDiv();


</script>

<script>
    function copyDiv2() {
        var firstDivContent = document.getElementById('mydiv3');
        var secondDivContent = document.getElementById('mydiv4');
        secondDivContent.innerHTML = firstDivContent.innerHTML;
    }

    //Call copyDiv on body="onload"
    copyDiv2();
</script>

<script type="text/javascript">H5F.setup(document.getElementById('ss-form'));
          _initFormViewer(
            "[100,,[[[1553647671,[[2,101,[\x22\x27\x22]\n,\x22Please remove the \x27 from your Display Name or Organization Name\x22]\n]\n]\n,[1205797193,[[2,101,[\x22\x27\x22]\n,\x22Please replace \x27\x22]\n]\n]\n]\n]\n]\n");</script>

</body>
</html>

<!-- SCRIPTS -->
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="P2/js/init.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/custom-js.js"></script>
<script src="P2/js/helper-plugins.js"></script> <!-- Helper Plugins -->
<script src="P2/vendor/countdown/js/jquery.countdown.min.js"></script> <!-- Jquery Timer -->


<!-- Google Custom Search styles -->
<style>
    .google-search-container {
        padding: 0;
    }
    table.gsc-search-box td {
        padding: 0;
    }
    td.gsc-search-button {
        padding: 0;
        margin:0;
    }
    input.gsc-search-button,
    input.gsc-search-button-v2 {
        width: 26px;
        height: 26px;
        padding: 5px;
        margin: 1px 0 0;
        background-color: #292929;
        border: 1px solid #292929;
    }
    input.gsc-search-button:hover,
    input.gsc-search-button:focus,
    input.gsc-search-button-v2:hover,
    input.gsc-search-button-v2:focus {
        background-color: #292929;
        border: 1px solid #fff;
    }
    form.gsc-search-box {
        margin-top: 3px;
    }
</style>

<!-- SQL DESIGN FOR LATER
select
    sum(a.count)
from
    (select count(*) as count from share_export
     union all
     select count(*) as count from nwf_locations) a

   -->
