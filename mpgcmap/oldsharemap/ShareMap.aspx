<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeFile="ShareMap.aspx.cs" Inherits="ShareMap" EnableEventValidation="false" %>

<%@ Register Src="~/Controls/RegisterUser.ascx" TagName="Register" TagPrefix="uc" %>
<%@ Register Src="~/Controls/MapViewControl.ascx" TagName="MapViewControl" TagPrefix="uc" %>

<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <link rel="stylesheet" href="<%= ResolveUrl("~/css/google-map.css") %>" />
    <link rel="stylesheet" href="<%= ResolveUrl("~/css/multiple-select.css") %>" />
    <link href="<%= ResolveUrl("~/Content/SiteUpload.css") %>" rel="stylesheet" type="text/css" />
    <link href='https://fonts.googleapis.com/css?family=Dosis:700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab' rel='stylesheet' type='text/css'>


    <script src="https://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/js/jquery.multiple.select.js")%>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/AjaxFileupload.js")%>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/common.js")%>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/Scripts/banners.js")%>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/js/jquery.zclip.js")%>" type="text/javascript"></script>

    <script type="text/javascript">
        window._skel_config = {
            prefix: '<%= ResolveUrl("~/css/style")%>',
            preloadStyleSheets: true,
            resetCSS: true,
            boxModel: 'border',
            grid: { gutters: 30 },
            breakpoints: {
                wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
                narrow: { range: '481-1199', containers: 960 },
                mobile: { range: '-480', containers: 960 }
            }
        };
    </script>
    <script src="<%= ResolveUrl("~/js/config.js") %>" type="text/javascript"></script>
    <script src="<%= ResolveUrl("~/js/skel.min.js") %>" type="text/javascript"></script>
    <noscript>
        <link rel="stylesheet" href="<%= ResolveUrl("~/css/skel-noscript.css")%>" />
    </noscript>
    <script type="text/javascript" language="javascript">

        // This variable will be used in javascript to determer root path on server
        var rootServerPath = '<%=ResolveUrl("~")%>';

      

        var banners = [
            new banner('Share', 'http://pollinator.org/SHARE.htm', '<%=ResolveUrl("~/Images/logo/sharelogo.png")%>', '30/04/2119', 'top'),
            new banner('AmericanHort logo for PPT', 'http://americanhort.org/', '<%=ResolveUrl("~/Images/logo/Hort.jpg")%>', '30/04/2119', 'top'),
            new banner('APGA_Combo-logo-Web', 'http://www.publicgardens.org/', '<%=ResolveUrl("~/Images/logo/APGA_Combo-logo-Web.png")%>', '30/04/2119', 'top'),
            new banner('APGALogo', 'http://www.nwf.org/', '<%=ResolveUrl("~/Images/logo/NWF.jpg")%>', '30/04/2119', 'top'),
            new banner('ASTA_logo', 'http://www.amseed.org/', '<%=ResolveUrl("~/Images/logo/ASTA_logo.png")%>', '30/04/2119', 'top'),
            new banner('KG-ResourceLogo_4c', 'http://www.kidsgardening.org/', '<%=ResolveUrl("~/Images/logo/KG-ResourceLogo_4c.jpg")%>', '30/04/2119', 'top'),
            new banner('NGA2015_4c', 'http://www.garden.org/', '<%=ResolveUrl("~/Images/logo/NGA2015_4c.jpg")%>', '30/04/2119', 'top'),
			new banner('WHC', 'http://www.wildlifehc.org/', '<%=ResolveUrl("~/Images/logo/logowhy.png")%>', '30/04/2119', 'top'),
			new banner('naba', 'http://www.naba.org/', '<%=ResolveUrl("~/Images/logo/aba.png")%>', '30/04/2119', 'top'),
			new banner('Share', 'http://pollinator.org/', '<%=ResolveUrl("~/Images/logo/pollinator.png")%>', '30/04/2119', 'top'),
			new banner('wild', 'http://www.wildones.org/', '<%=ResolveUrl("~/Images/logo/wild.png")%>', '30/04/2119', 'top'),
			new banner('lbjf', 'https://www.wildflower.org/', '<%=ResolveUrl("~/Images/logo/lbj.png")%>', '30/04/2119', 'top'),
			new banner('neef', 'http://www.neefusa.org/', '<%=ResolveUrl("~/Images/logo/NEEF.png")%>', '30/04/2119', 'top'),
			new banner('cpl', 'http://captainplanetfoundation.org/', '<%=ResolveUrl("~/Images/logo/cpl.png")%>', '30/04/2119', 'top'),
			new banner('saf', 'http://www.safnow.org/', '<%=ResolveUrl("~/Images/logo/saf.png")%>', '30/04/2119', 'top'),
            new banner('AFE', 'http://endowment.org/', '<%=ResolveUrl("~/Images/logo/AFE.png")%>', '30/04/2119', 'top'),
            new banner('AIB', 'http://www.americainbloom.org/', '<%=ResolveUrl("~/Images/logo/AIB.png")%>', '30/04/2119', 'top'),
            new banner('HGSA', 'http://www.ezfromseed.org/', '<%=ResolveUrl("~/Images/logo/HGSA.png")%>', '30/04/2119', 'top'),
            new banner('KAB', 'http://www.kab.org', '<%=ResolveUrl("~/Images/logo/KAB.png")%>', '30/04/2119', 'top'),
            new banner('NGC', 'http://www.gardenclub.org/', '<%=ResolveUrl("~/Images/logo/NGCI.png")%>', '30/04/2119', 'top'),
            new banner('NRPA', 'http://www.nrpa.org/', '<%=ResolveUrl("~/Images/logo/NPRA.png")%>', '30/04/2119', 'top'),
            new banner('usda', 'http://www.usda.gov/', '<%=ResolveUrl("~/Images/logo/usda.png")%>', '30/04/2119', 'top'),
            new banner('usfs', 'http://www.fs.fed.us/', '<%=ResolveUrl("~/Images/logo/usfs.png")%>', '30/04/2119', 'top'),
            new banner('xerces', 'http://www.xerces.org/', '<%=ResolveUrl("~/Images/logo/xerces.png")%>', '30/04/2119', 'top'),
            new banner('american', 'www.ahs.org', '<%=ResolveUrl("~/Images/logo/american.jpg")%>', '30/04/2119', 'top'),
            new banner('EPA', 'http://www.epa.gov', '<%=ResolveUrl("~/Images/logo/EPA.jpg")%>', '30/04/2119', 'top'),
            new banner('NPGN', 'http://www.fws.gov//', '<%=ResolveUrl("~/Images/logo/NPGN.jpg")%>', '30/04/2119', 'top'),
            new banner('SNHM', 'http://www.mnh.si.edu/', '<%=ResolveUrl("~/Images/logo/snh.jpg")%>', '30/04/2119', 'top'),
           ]
    </script>
<!-- Start style for filters-->
    <style>
        div.swb img
        {
            max-width: 215px !important;
            height:120px;
        }
        a {
            color: #FFF;
        }
        a:hover {
            color: yellow;
            text-decoration: underline;
        }
        .thumbnails img {
            height: 120px;
            border: 1px solid #555;
            padding: 1px;
            margin: 0 10px 10px 0;
        }
        
        .split img{
            height:150px!important;
            width:35%!important;
        }

        .thumbnails img:hover {
            border: 4px solid #00ccff;
            cursor:pointer;
        }

        .preview img {
            border: 4px solid #444;
            padding: 1px;
            width: 800px;
        }
        .thumbnails.split{
            max-width:1000px;
        }
        #bffsub{
            font-size: .55em;
            font-style: italic;
            color: #ffce54;
            margin-left: 10px;
        }
        .containerbt.bottom {
            padding-bottom: 100px;
            padding-top:50px;
}
        .registercontainer {
    border-style: dashed;
    border-width: 3px;
    border-color: #ffce54;
    background-color:white!important;
}
        #content	{
            background:url(/images/logo/MPGC.png) top center no-repeat margin-bottom:50px;
            background-attachment:fixed; 
        
}
    div{
        font-family:'Roboto Slab';
    }
</style>

        
    </style>
    <div id="content" class="content full">
        <div class="containerbt">
            <div class="rowbt">
                <div class="col-md-9">
                    <h3 class="title" style="font-size: 24px;"><span id="bff">Million Pollinator Garden Challenge Map</span><span id="bffsub">Powered by S.H.A.R.E</span></h3>
                    <p>
                       Register your pollinator habitat below. It is free and easy!  Explore other pollinator friendly SHARE landscapes all over the globe! See if your favorite organization is participating by looking for their logo to the right.   
                    </p>
                    <div id="map" class="tab-pane">
                    </div>
                </div>


                <!-- Start Sidebar -->
                <div class="col-md-3 right-sidebar sidebar" style="padding-right: 30px">
                    <div class="project-centre widget sidebar-widget">
                        <h3 class="title" style="font-size: 18px; font-weight: normal">Partners</h3>
                        <div align="left" style="min-height: 140px;">
                            <script type="text/javascript">
                                show_banners('top');

                            </script>
                        </div>
                    </div>

                </div>

            </div>
            <!--Start Counter and MPGC Logo-->
                <div class="row" align="center">
                    <uc:MapViewControl ID="MapViewControl" runat="server" />
                </div>
            <!-- Start Map Section-->
            
            <div class="row" style="padding-bottom:35px; padding-top:5px">
                <iframe src="http://mitguard.com/pollinator/map15v1.1.html" style="width:100%; height: 550px"></iframe>
            </div> 
            <!-- End Map Section--> 
        </div>
        <!-- Start Filter Section-->
        <div class="containerbt ">
        <div class="col-md-12">
                    <h3 class="title" style="font-size: 24px;"><span id="bff">Explore the Map!</span><span id="bffsub">Powered by S.H.A.R.E</span></h3>
                    <p>
                      Looking to see if your local pollinator is registered? Use the tools below to search the MPGC database of pollinators by name or filter by your favorite organization. If your organization has registered but is not on the map, please <a href="mailto:info@pollinator.org">click here</a> and our support team will be happy to assist you. 
                    </p>
                    <div id="map" class="tab-pane">
                    </div> 
                </div>
        <!-- Find Pollinators Section-->
                <div class="superrow" style="font-family: 'Dosis', sans-serif; margin-top:50px;" align="center">
                    <h2>Search for Your Garden</h2>
                    <p>Two easy ways to search</p>
                    <br> 
                    <div class="thumbnails">
                         <img class="button1 left" onclick="location.href='/ShareMap2';" name="img1" src="images/search_address.png" alt=""/>
                         <img class="button1 right" onclick="location.href='/ShareMap2';" name="img1" src="images/search_username.png" alt=""/>
                        <!--Support link-->
      
                    </div>
                </div>
        <!--End Search MPGC Database-->
        
        <!-- Start Filter-Find BY PARTNER-->
            <div class="superrow" style="font-family: 'Dosis', sans-serif;" align="center">
                    <h2>Search Pollinators by Organization</h2>
                    <p>Click on the logo below to be taken to their landing page</p>
                    <br>
                    <div class="thumbnails">
                        <img onclick="location.href='/nationalwildlifefederation';" name="img1" src="images/filter/nwf.png" alt=""/>
                        <img onclick="location.href='/captainplanet';" name="img1" src="images/filter/captainplanet.png" alt=""/>
                        <img onclick="location.href='/davidsuzukifoundation';" name="img1" src="images/filter/suzuki.png" alt=""/>
                        <img onclick="location.href='/APGA';" name="img1" src="images/filter/apfanew.png" alt=""/>
                        <img onclick="location.href='/beebufferproject';" name="img1" src="images/filter/beebuffer.png" alt=""/>
                        <img onclick="location.href='/monarchjointventure';" name="img1" src="images/filter/monarch.png" alt=""/>
                        <img onclick="location.href='/WilldlifeHabitatCouncil';" name="img1" src="images/filter/whc.png" alt=""/>
                        <img onclick="location.href='/beefriendlyfarmer';" name="img1" src="images/filter/bff.png" alt=""/>
                       
                    </div>
            <a href="mailto:info@pollinator.org">Still can't find your Pollinator? Click Here</a>
                </div>
        <!--End of Second Half of the Page-->
        </div>
    <!-- End Filter-Find BY PARTNER-->
        <!--Form Header-->
        <div class="containerbt bottom">
        <div class="col-md-12">
                    <h3 class="title" style="font-size: 24px;"><span id="bff">Register for the Million Pollinator Garden Challenge</span><span id="bffsub">Powered by S.H.A.R.E</span></h3>
                    <p>
                    Please fill out the form below to register your pollinator for the map!
                    </p>
                    <div id="map" class="tab-pane">
                    </div>
                </div>
</div>
        <!--Form Close-->
        <!--Start Form-->
        <div style="margin-top:50px">
            <a name="register-form"></a>
            <uc:Register ID="Register1" runat="server" />
            </div>
        </div>
        <!--End Form-->
    
    <a href="#x" class="overlay" id="embed_popup"></a>
    <div id="embedpopup" class="popup" style="width: 510px; height: 210px">
        <h4>Embed Code</h4>
        <div contenteditable="true" id="embedcode" style="text-align: left; line-height: 150%; border: 1px solid #ccc; word-wrap: break-word; white-space: normal; padding: 5px; width: 480px; height: 90px; font-family: monospace; font-size: 12px; display: block">&lt;iframe width="560" height="315" src="<%=Request.Url.GetLeftPart(UriPartial.Authority) +ResolveUrl("~/MapWidget")%>" frameborder="0"&gt;&lt;/iframe&gt;</div>
        <p style="text-align: center; padding: 10px 0"><a id="copyembedcode" href="#x" style="min-width: 200px; color: #fff; font-size: 14px; font-family: Arial;" class="submit button btn24">Copy to Clipboard</a></p>
        <a class="popup-close" href="#close"></a>
    </div>


</asp:Content>
