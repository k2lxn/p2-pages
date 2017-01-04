<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>MPGC Map | Pollinator Partnership</title>

    <!-- Bootstrap -->
    <link href="resources/css/custom/custom-bootstrap.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="resources/css/font-awesome.css" rel="stylesheet">
    <link href="resources/css/mapcss.css" rel="stylesheet">

    <!--CartoDB Mapping CSS and Scripts-->

    <link rel="stylesheet" href="resources/css/cartodb-style.css" />

    <link rel="stylesheet" type="text/css" href="resources/slick/slick-theme.css"/>
    <link rel="stylesheet" type="text/css" href="resources/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="resources/css/map_custom.css"/>


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

     3




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
                        MPGC Map:
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
    <div class="row">
        <!-- HIDE SMALL SEARCH-->
        <div class="col-lg-3 col-md-3 col-sm-12" id="searchbox">
            <h3 class="center">Search for Your Site</h3>
            <span id="counter_overall"></span>
            <div class='col-sm-12' id="questions">
                <div class='input-group'>
                          <span class="input-group-btn">
                              <button class="btn btn-default" type="button" type="button" onclick="search()">Search</button>
                          </span>
                    <input label="hello" type="text" class="form-control" name="search_organization" placeholder="By Organization or Display Name" value="" id="search_organization" size="10" />

                </div>
                <div id="locationField" class='input-group'>
                          <span  class="input-group-btn">
                              <button class="btn btn-default" type="button" type="button" onclick="search2()">Search</button>
                          </span>
                    <input label="hello" id="autocomplete" type="text" class="form-control" name="search_organization" placeholder="By Location" value="" size="10" />
                </div>
            </div>
        </div>
        <div id="map"></div>
    </div>

    <!--END NEW MAP-->

    <!--START PARTNER SCROLLER-->
    <div class="container-fluid" id="confirmed_landing">
        <div class="row" id="sponsor_counter">
            <div class="col-md-12" id="sponsor_logo_horizontal">
                <div class="responsive col-sm-12 col-xs-12">
                    <div id="logo_vertical"><a href="http://www.americainbloom.org/"><img src="logo/aib.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.ahs.org/"><img src="logo/american.png"></a></div>
                    <div id="logo_vertical"><a href="http://americanhort.org/"><img src="logo/americanhort.png"></a></div>
                    <div id="logo_vertical"><a href="https://publicgardens.org/"><img src="logo/apga.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.amseed.org/"><img src="logo/asta.png"></a></div>
                    <div id="logo_vertical"><a href="http://beebuffer.com/"><img src="logo/beebuffer.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.pollinator.org/bff"><img src="logo/bff.png"></a></div>
                    <div id="logo_vertical"><a href="http://captainplanetfoundation.org/"><img src="logo/cpl.png"></a></div>
                    <div id="logo_vertical"><a href="http://epa.gov"><img src="logo/epa.png"></a></div>
                    <div id="logo_vertical"><a href="https://www.kab.org/"><img src="logo/kab.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.kidsgardening.org/"><img src="logo/kidsgardening.png"></a></div>
                    <div id="logo_vertical"><a href="https://www.wildflower.org/"><img src="logo/lbj.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.monarchwatch.org/"><img src="logo/monarch.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.monarchjointventure.org/"><img src="logo/monarchjoint.png"></a></div>
                    <div id="logo_vertical"><a href="http://millionpollinatorgardens.org"/><img src="logo/mpgc.png"></a></div>
                    <div id="logo_vertical"><a href="https://www.neefusa.org/"><img src="logo/neef.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.fws.gov/"><img src="logo/NFWS.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.gardenclub.org/"><img src="logo/ngc.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.nrpa.org/"><img src="logo/nrpga.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.nwf.org/"><img src="logo/nwf.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.pollinator.org/"><img src="logo/pollinator.png"></a></div>
                    <div id="logo_vertical"><a href="https://safnow.org/"><img src="logo/saf.png"></a></div>
                    <div id="logo_vertical"><a href="http://naturalhistory.si.edu/"><img src="logo/smithsonian.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.davidsuzuki.org/"><img src="logo/suzuki.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.usda.gov/wps/portal/usda/usdahome"><img src="logo/usda.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.fs.fed.us/"><img src="logo/usfs.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.wildlifehc.org/"><img src="logo/whc.png"></a></div>
                    <div id="logo_vertical"><a href="http://www.wildones.org/"><img src="logo/wildones.png"></a></div><div id="logo_vertical"><a href="http://www.ngb.org/"><img src="logo/ngb.png"></a></div><div id="logo_vertical"><a href="http://www.dar.org/"><img src="logo/DAR.png"></a></div><div id="logo_vertical"><a href="http://growitmobile.com/"><img src="logo/growit.png"></a></div>
                </div>
            </div>
            <div class="col-md-12 col-xs-12 overflow" id="header_cover"></div>
        </div>
    </div>


    <!-- Start of Standard Page Content-->

    <div class="container main">

        <div class="row">
            <div class="col-md-8" style="padding-bottom:50px">
                <h2><div class="heading-content">Thank You for Registering for the SHARE Map!<span id="secondary_title">Powered by S.H.A.R.E</span></div></h2>
                <p class="lead">Your site is now registered and will soon be displayed on the map.</p>
                <p>Please note that it can take up to two (2) minutes for your site to be displayed on the map, if you are having trouble finding your site please try refreshing your page several times before contacting support.</p>
                <p>If you would like to register an additional site, please click the button below </p>
                <a class="btn btn-primary btn-lg register" href="register_updated.php#form">Register Additional Site</a>

                <!--START DATA TABLE-->



                <!--END DATA TABLE-->
                <!-- START FORM -->
                <!-- Change the width and height values to suit you best -->
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

<script src="resources/js/cartodbjs.js"></script>

<!--For Image Slider Slick-->

<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>

<script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="slick/slick.min.js"></script>
<script src="resources/js/app.js"></script>
<script type="text/javascript" src="resources/js/googleauto.js"></script>
<script type="text/javascript" src="resources/js/imageupload.js"></script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQav82qqHPZc7A7C2Ui8YjWwaHXJoImEk&libraries=places&callback=initAutocomplete"
        async defer></script>


<script type="text/javascript" src="resources/js/cartodb_total_overall.js"></script>

<script src="resources/js/cartodbsql_search_final.js"></script>


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
<script src="resources/js/bootstrap.js"></script>
<script src="resources/js/custom-js.js"></script>
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
