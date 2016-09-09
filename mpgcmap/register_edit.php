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

    <!-- Start of Standard Page Content-->

    <div class="container main">

        <div class="row">
            <div class="col-md-8" style="padding-bottom:50px">
                <h2><div class="heading-content">Edit Your SHARE Site<span id="secondary_title">Powered by S.H.A.R.E</span></div></h2>
                <p class="lead">Please fill out the form below with the updated information for your site. Please note that if an email address was not provided when your site was registered we will be unable to edit the entry, and a new site will be created. If you would like to delete your site, please <a href="malto:info@poillinator.org">click here</a> to get in contact with our support team</p>

                <a class="btn btn-primary btn-lg register" href="register_updated.php#form">Click Here to Create New Site</a>

                <!--START DATA TABLE-->



                <!--END DATA TABLE-->
                <!-- START FORM -->
                <!-- Change the width and height values to suit you best -->
               <div class="google-form" id="form_start">
                   <script type="text/javascript">var submitted=false;</script>
                   <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {window.location='http://pollinator.org/mpgcmap/register_confirmed.php#confirmed_landing';}"></iframe>
                   <form action="https://docs.google.com/a/pollinator.org/forms/d/1SxqxTxf50Ud0pMzEZc2CgGdDUCrCfSwldpLi-wObr5w/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;">

                       <div id="updatename">
                           <div class="errorbox-good" role="listitem">
                               <div dir="auto" class="ss-item  ss-section-header"><div class="ss-form-entry">
                                       <h2 class="ss-section-title">Tell Us About You</h2>
                                       <div class="ss-section-description ss-no-ignore-whitespace"></div>
                                   </div></div></div>
                           <div class="ss-form-question errorbox-good" role="listitem">
                               <div dir="auto" class="ss-item  ss-text"><div class="ss-form-entry">
                                       <label class="ss-q-item-label" for="entry_669979718"><div class="ss-q-title">Your Name
                                           </div>
                                           <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                                       <input type="text" name="entry.669979718" value="" class="ss-q-short" id="entry_669979718" dir="auto" aria-label="Your Name  " title="">
                                       <div class="error-message" id="1752199098_errorMessage"></div>
                                   </div></div></div>


                           <div class="ss-form-question errorbox-good" role="listitem">
                               <div dir="auto" class="ss-item  ss-text"><div class="ss-form-entry">
                                       <label class="ss-q-item-label" for="entry_1634379195"><div class="ss-q-title">Your Email Address
                                           </div>
                                           <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                                       <input type="text" name="entry.1634379195" value="" class="ss-q-short" id="entry_1634379195" dir="auto" aria-label="Your Email Address  " title="">
                                       <div class="error-message" id="1358734387_errorMessage"></div>
                                   </div></div></div>
                       </div>

                       <div class="errorbox-good" role="listitem">

                           <!--START TOP QUESTION SECTION-->
                           <div dir="auto" class="ss-item  ss-section-header"><div class="ss-form-entry">
                               <h2 class="ss-section-title">About Your Site</h2>
                               <div class="ss-section-description ss-no-ignore-whitespace"></div>
                           </div></div></div>
                            <!--ORGANIZATION NAME/DISPLAY NAME-->
                       <div class="ss-form-question errorbox-good" role="listitem">
                       <div dir="auto" class="ss-item ss-item-required ss-text"><div class="ss-form-entry">
                           <label class="ss-q-item-label" for="entry_1553647671"><div class="ss-q-title">Organization Name/Display Name
                               <label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>
                               <span class="ss-required-asterisk" aria-hidden="true">*</span></div>
                               <div class="ss-q-help ss-secondary-text" dir="auto">This is the name that we will use to display your site on the SHARE Map</div></label>
                           <input type="text" name="entry.1553647671" value="" class="ss-q-short stored" id="entry_1553647671" dir="auto" aria-label="displayname" aria-required="true" required="" title="">
                           <div class="error-message" id="390707824_errorMessage"></div>
                           <div class="required-message">This information will be displayed publically on the SHARE Map</div>
                       </div></div></div>

                            <!--DESCRIPTION-->

                       <div class="ss-form-question errorbox-good" role="listitem">
                       <div dir="auto" class="ss-item  ss-paragraph-text"><div class="ss-form-entry">
                           <label class="ss-q-item-label" for="entry_1205797193"><div class="ss-q-title">Description
                           </div>
                               <div class="ss-q-help ss-secondary-text" dir="auto">Please provide a short description of your pollinator site, your organization or anything that you would like other SHARE users to know about your site. </div></label>
                           <textarea name="entry.1205797193" rows="8" cols="0" class="ss-q-long stored" id="entry_1205797193" dir="auto" aria-label="Description Please provide a short description of your pollinator site, your organization or anything that you would like other SHARE users to know about your site.  "></textarea>
                           <div class="error-message" id="1019650435_errorMessage"></div>
                           <div class="required-message">This information will be displayed publically on the SHARE Map</div>
                       </div></div></div>

                             <!--WEBSITE-->

                       <div class="ss-form-question errorbox-good" role="listitem">
                       <div dir="auto" class="ss-item  ss-text"><div class="ss-form-entry stored">
                           <label class="ss-q-item-label" for="entry_508366367"><div class="ss-q-title">Website
                           </div>
                               <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                           <input type="text" name="entry.508366367" value="" class="ss-q-short stored" id="entry_508366367" dir="auto" aria-label="Website  " title="">
                           <div class="error-message" id="836937721_errorMessage"></div>
                           <div class="required-message">This information will be displayed publically on the SHARE Map</div>
                       </div></div></div>


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
                           <div class="required-message">This information will be displayed publically on the SHARE Map</div>


                       </div>

                       <!--END IMAGE UPLOAD-->
                       <!--START YOUTUBE-->

                       <div class="ss-form-question errorbox-good" role="listitem">
                           <div dir="auto" class="ss-item  ss-text"><div class="ss-form-entry">
                                   <label class="ss-q-item-label" for="entry_1958133231"><div class="ss-q-title">Youtube URL
                                       </div>
                                       <div class="ss-q-help ss-secondary-text" dir="auto">ie. <a href="https://www.google.com/url?q=https://youtu.be/xW_AsV7k42o&amp;sa=D&amp;ust=1460585864055000&amp;usg=AFQjCNFJOROC_KyDa4V24SCVMCfXQKRj5g">https://youtu.be/xW_AsV7k42o</a></div></label>
                                   <input type="text" name="entry.1958133231" value="" class="ss-q-short" id="entry_1958133231" dir="auto" aria-label="Youtube URL ie. https://youtu.be/xW_AsV7k42o " title="">
                                   <div class="error-message" id="1928594125_errorMessage"></div>
                                   <div class="required-message">This information will be displayed publically on the SHARE Map</div>
                               </div></div></div>

                       <!--END YOUTUBE AREA-->

                       <!--START COPY AREA-->
                       <div id='mydiv2'></div>


                       <!--END COPY AREA-->

                       <!--END ADD YOUR CONTENT-->
                       <!--START DROPDOWN-->
                           <div id="moreinfo">
                               <div dir="auto" class="ss-item  ss-section-header">
                                       <h2 class="ss-section-title">Site Details</h2>
                               </div>

                               <!--START LOCATION AREA-->
                               <div class="errorbox-good" role="listitem"></div>
                               <!--FORM LOCATION FIELD-->
                               <div class="ss-form-entry" id="locationField">
                                   <label class="ss-q-item-label" for="entry_963686522"><div class="ss-q-title">Address of Site
                                           <label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>
                                           <span class="ss-required-asterisk" aria-hidden="true">*</span></div>
                                       <div class="ss-q-help ss-secondary-text" dir="auto">Address, City, State, Zip, Country</div></label>
                                   <input type="text" name="entry.963686522" value="" class="ss-q-short stored" id="autocomplete" id="entry_963686522" dir="auto" aria-label="Location Address, City, State, Zip, Country " aria-required="true" required="" title="">
                                   <div class="error-message" id="1851421797_errorMessage"></div>
                                   <div class="required-message">This information will be displayed publically on the SHARE Map</div>
                               </div>
                               <!--FORM LOCATION FIELD-->

                               <!--START FINE TUNE UPDATE-->
                               <div id="mapping_section">
                                   <div dir="auto" class="ss-item  ss-text"><div class="ss-form-entry">
                                           <label class="ss-q-item-label" for="entry_1095852240"><div class="ss-q-title">Street Numbner
                                               </div>
                                               <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                                           <input type="text" name="entry.1095852240" value="" class="ss-q-short stored" id="street_number" id="entry_1095852240" dir="auto" aria-label="Street Numbner  " title="">
                                           <div class="error-message" id="1189673682_errorMessage"></div>
                                           <div class="required-message">This information will be displayed publically on the SHARE Map
                                           </div></div></div>

                                   <div class="ss-form-question errorbox-good" role="listitem">
                                       <div dir="auto" class="ss-item  ss-text"><div class="ss-form-entry">
                                               <label class="ss-q-item-label" for="entry_1236654309"><div class="ss-q-title">Address
                                                   </div>
                                                   <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                                               <input type="text" id="route" name="entry.1236654309" value="" class="ss-q-short" id="locality" id="entry_1236654309" dir="auto" aria-label="Address  " title="">
                                               <div class="error-message" id="1925924362_errorMessage"></div>
                                               <div class="required-message">This information will be displayed publically on the SHARE Map</div>
                                           </div></div></div>

                                   <div class="ss-form-question errorbox-good" role="listitem">
                                       <div dir="auto" class="ss-item ss-item-required ss-text"><div class="ss-form-entry">
                                               <label class="ss-q-item-label" for="entry_1932770363"><div class="ss-q-title">City
                                                       <label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>
                                                       <span class="ss-required-asterisk" aria-hidden="true">*</span></div>
                                                   <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                                               <input type="text" name="entry.1932770363" value="" class="ss-q-short" id="locality" id="entry_1932770363" dir="auto" id="locality" aria-label="City  " aria-required="true" required="" title="">
                                               <div class="error-message" id="1749700097_errorMessage"></div>
                                               <div class="required-message">This information will be displayed publically on the SHARE Map</div>
                                           </div></div></div>

                                   <div class="ss-form-question errorbox-good" role="listitem">
                                       <div dir="auto" class="ss-item ss-item-required ss-text"><div class="ss-form-entry">
                                               <label class="ss-q-item-label" for="entry_1578063307"><div class="ss-q-title">State/Province
                                                       <label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>
                                                       <span class="ss-required-asterisk" aria-hidden="true">*</span></div>
                                                   <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                                               <input type="text" name="entry.1578063307" value="" class="ss-q-short" id="administrative_area_level_1" id="entry_1578063307" dir="auto" aria-label="State/Province  " aria-required="true" required="" title="">
                                               <div class="error-message" id="2025509706_errorMessage"></div>
                                               <div class="required-message">This information will be displayed publically on the SHARE Map</div>
                                           </div></div></div>

                                   <div class="ss-form-question errorbox-good" role="listitem">
                                       <div dir="auto" class="ss-item  ss-text"><div class="ss-form-entry">
                                               <label class="ss-q-item-label" for="entry_1246372804"><div class="ss-q-title stored">Zip Code
                                                   </div>
                                                   <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                                               <input type="text" name="entry.1246372804" value="" class="ss-q-short" id="postal_code" id="entry_1246372804" dir="auto" aria-label="Zip Code  " title="">
                                               <div class="error-message" id="63721695_errorMessage"></div>
                                               <div class="required-message">This information will be displayed publically on the SHARE Map</div>
                                           </div></div></div>

                                   <div class="ss-form-question errorbox-good" role="listitem">
                                       <div dir="auto" class="ss-item  ss-text"><div class="ss-form-entry">
                                               <label class="ss-q-item-label" for="entry_571678429"><div class="ss-q-title">Country
                                                   </div>
                                                   <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                                               <input type="text" name="entry.571678429" value="" class="ss-q-short" id="country" id="entry_571678429" dir="auto" aria-label="Country  " title="">
                                               <div class="error-message" id="1755492525_errorMessage"></div>
                                               <div class="required-message">This information will be displayed publically on the SHARE Map</div>
                                           </div></div></div>
                               </div>
                               <!--END FINE TUNE UPDATE-->

                               <!--END LOCATION AREA-->

                               <div class="ss-form-question errorbox-good" role="listitem">
                                   <div dir="auto" class="ss-item  ss-select"><div class="ss-form-entry">
                                           <label class="ss-q-item-label" for="entry_1414392500"><div class="ss-q-title">Type of Site
                                               </div>
                                               <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                                           <select class="stored" name="entry.1414392500" id="entry_1414392500" aria-label="type  "><option value=""></option>
                                               <option value="Corporation">Corporation</option> <option value="Faith Community">Faith Community</option> <option value="Farm">Farm</option> <option value="Home Garden">Home Garden</option> <option value="Institution">Institution</option> <option value="Nonprofit">Nonprofit</option> <option value="Right of Way (ROW)">Right of Way (ROW)</option> <option value="Rooftop Garden">Rooftop Garden</option> <option value="OTHER">OTHER</option></select>
                                           <div class="required-message">This is a required question</div></div></div></div>

                               <div class="ss-form-question errorbox-good" role="listitem">
                                   <div dir="auto" class="ss-item  ss-select"><div class="ss-form-entry">
                                           <label class="ss-q-item-label" for="entry_505488395"><div class="ss-q-title">Size of Site
                                               </div>
                                               <div class="ss-q-help ss-secondary-text" dir="auto"></div></label>
                                           <select name="entry.505488395" id="entry_505488395" aria-label="size  "><option value=""></option>
                                               <option value="Small Planter or Balcony (30 square feet or less)">Small Planter or Balcony (30 square feet or less)</option> <option value="Small Garden (30 - 100 square feet)">Small Garden (30 - 100 square feet)</option> <option value="Large Garden (100 - 1000 square feet)">Large Garden (100 - 1000 square feet)</option> <option value="Medium Yard (1/2 acre or Less)">Medium Yard (1/2 acre or Less)</option> <option value="Large Yard (1/2 - 1 acre)">Large Yard (1/2 - 1 acre)</option> <option value="Field (1 - 5 acres)">Field (1 - 5 acres)</option> <option value="Large Field (5 - 10 acres)">Large Field (5 - 10 acres)</option> <option value="Meadow or Similar">Meadow or Similar</option> <option value="Park">Park</option> <option value="Other">Other</option></select>
                                           <div class="required-message">This is a required question</div></div></div></div>

                           </div>
                       <!--END DROPDONW-->


                       <input type="hidden" name="draftResponse" value="[,,&quot;-270051466427882008&quot;]">
                       <input type="hidden" name="pageHistory" value="0">

                       <input type="hidden" name="fbzx" value="-270051466427882008">
                       <input type="submit" name="submit" value="Submit" id="ss-submit" class="jfk-button jfk-button-action ">
                       </ol></form>

                   <!-- Modal -->
                   <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                       <div class="modal-dialog" role="document">
                           <div class="modal-content">
                               <div class="modal-header">
                                   <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                   <h4 class="modal-title" id="myModalLabel">Image Upload</h4>
                               </div>
                               <div class="modal-body">
                                   <form action="register_updated.php#content2"  method="post" enctype="multipart/form-data">

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


                   <?php
                   if(isset($_POST['upload'])){
                        $image_name=$_FILES['image']['name'];
                        $image_type=$_FILES['image']['type'];
                        $image_size=$_FILES['image']['size'];
                        $image_tmp_name=$_FILES['image']['tmp_name'];

                       if($image_name==''){
                           echo "<script>alert('Please select an image')</script>";
                           exit();

                       }
                       else
                           move_uploaded_file ($image_tmp_name,"photos/$image_name");
                       echo "<div id='mydiv3'><img id='previewimage' src='photos/$image_name'></div>";
                       echo "<a id='hide1' href='photos/$image_name'>This is the Link</a>";
                       echo "<div id='mydiv1'><input type='text' name='entry.929665264' value='photos/$image_name' class='ss-q-short' id='entry_929665264' dir='auto' aria-label='Youtube URL ie'></div>";

                   }

                   ?>

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
