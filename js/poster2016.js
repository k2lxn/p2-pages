
var poster_key = { 
	'1': 'Bigleaf Maple',  
	'2': 'Tulip Tree',
	'3': 'Northern Catalpa',
	'4': 'Black Willow',
	'5': 'Southern Crabapple',
	'6': 'Staghorn Sumac',
	'7': 'Flowering Dogwood',
	'8': 'Eastern Redbud'
}

// var trees = ajax object?? with all tree data mapped to tree name?
// including images??
var trees = {
	'Bigleaf Maple': [['latin', 'Acer macrophyllum (Sapindaceae)'],
										['Geographic Distribution', 'Western United States and Canada, from British Columbia to California'],
										['Pollinators', 'Insect pollinators include bees, flies, and beetles.'],
										['Habitat', 'A large deciduous tree growing in moist woods, forests, and canyons'],
										['Mature height', '60-100 feet'], 
										['Bloom period', 'Late March to June'],
										['IUCN threat status', 'Not yet assessed'],
										['NatureServe conservation status', 'G5 - Secure'],
										['NatureServe_param', 'Acer+macrophyllum'],
										['encyclopedia_index', '582252']
									],
	'Tulip Tree': [['latin', 'Liriodendron tulipifera (Magnoliaceae)'],
								['Geographic Distribution', 'Eastern United States and Canada, from Vermont, west through southern Ontario, south to Louisiana, and east to northern Florida. State tree of Indiana and Tennessee'],
								['Pollinators', 'Nectar and pollen attract miscellaneous flies, beetles, honey bees, bumble bees, and other long-tongued bees. Ruby-throated Hummingbirds also visit for nectar. Some self-pollination.'],
								['Habitat', 'This tall, deciduous, long-lived broadleaf tree is a shade-tolerant pioneer species.'],
								['Mature height', '70-150 feet'], 
								['Bloom period', 'April to June'],
								['IUCN threat status', 'Lower Risk/least concern (LR/lc). It is very sensitive to high ozone concentrations.'],
								['NatureServe conservation status', 'G5 - Secure'],
								['NatureServe_param', 'Liriodendron+tulipifera'],
								['encyclopedia_index', '1155834']
							],
	'Northern Catalpa': [['latin', 'Catalpa speciosa (Bignoniaceae)'],
								['Geographic Distribution','Native range was from southern Indiana and southern Illinois, south to southern Tennessee and eastern Arkansas. Now widely naturalized in northern and eastern U.S. and Ontario, Canada.'],
								['Pollinators', 'Bees and moths.'],
								['Habitat', 'This perennial deciduous tree prefers moist, deep, well-drained soil, but adapts to dry or wet soils. Areas with a history of disturbance are preferred.'],
								['Mature height', '50-90 feet'], 
								['Bloom period', 'Late spring to early summer'],
								['IUCN threat status', 'Not yet assessed.'],
								['NatureServe conservation status', 'G4 - Apparently Secure',{'Indiana': 'Rare'}],
								['NatureServe_param','Catalpa+speciosa'],
								['encyclopedia_index', '58033']
							],
	'Black Willow': [['latin', 'Salix nigra (Salicaceae)'],
								['Geographic Distribution','Eastern United States, adjacent parts of Canada, and Mexico'],
								['Pollinators', 'Insects, especially bees and flies.'],
								['Habitat', 'This short-lived deciduous tree is most common on river margins, streambanks and meadows where it occupies the lower, wetter, and often less sandy sites.'],
								['Mature height', '30-90 feet'], 
								['Bloom period', 'February through late June'],
								['IUCN threat status', 'Not yet assessed.'],
								['NatureServe conservation status', 'G5 - Secure'],
								['NatureServe_param', 'Salix+nigra'],
								['encyclopedia_index', '585446']
							],
	'Southern Crabapple': [['latin', 'Malus angustifolia (Rosaceae)'],
								['Geographic Distribution','Throughout southeastern United States from southern Virginia, south to northern Florida, west to Louisiana, and north to Arkansas.'],
								['Pollinators', 'Insects, especially bees.'],
								['Habitat', 'This deciduous small tree grows in moist woods, woodland borders, stream banks, fence rows, and old fields.'],
								['Mature height', '20-35 feet'], 
								['Bloom period', 'March through May'],
								['IUCN threat status', 'Not yet assessed.'],
								['NatureServe conservation status', 'G5 - Secure',{'Florida':'threatened','Illinois':'Endangered','Kentucky':'Special Concern'}],
								['NatureServe_param', 'Malus+angustifolia+var.+angustifolia'],
								['encyclopedia_index', '633293']
							],
	'Staghorn Sumac': [['latin', 'Rhus typhina (Anacardiaceae)'],
								['Geographic Distribution','Eastern North America, from Quebec and Maine, west to northern Minnesota, south to western Tennessee and northern Alabama, and east to northern Georgia.'],
								['Pollinators', 'Insects, including short-tongued bees, wasps, and flies.'],
								['Habitat', 'This deciduous small tree is found in forest edges and disturbed sites on dry soils.'],
								['Mature height', '15-50 feet'], 
								['Bloom period', 'April to July'],
								['IUCN threat status', 'Not yet assessed.'],
								['NatureServe conservation status', 'G5 - Secure'],
								['NatureServe_param', 'Rhus+typhina'],
								['encyclopedia_index', '485569']
							],
	'Flowering Dogwood': [['latin', 'Cornus florida (Cornaceae)'],
								['Geographic Distribution','Eastern North America, from southwestern Maine, west to southern Ontario and central Michigan, central Illinois, Missouri, eastern Kansas, eastern Oklahoma, and eastern Texas, south to Nuevo León and Veracruz in eastern Mexico, and east to central Florida.'],
								['Pollinators', 'Insects, including bees, wasps, flies, skippers, and beetles.'],
								['Habitat', 'This deciduous multi-branched small tree is found in eastern deciduous and southern coniferous forests, floodplaines, ravines, and along fencerows.'],
								['Mature height', '15-30 feet'], 
								['Bloom period', 'March through June'],
								['IUCN threat status', 'Not yet assessed.'],
								['NatureServe conservation status', 'G5 - Secure',{'Maine':'Endangered','New York':'Exploitably Vulnerable','Vermont':'Threatened'}],
								['NatureServe_param', 'Cornus+florida'],
								['encyclopedia_index', '582707']
							],
	'Eastern Redbud': [['latin', 'Cercis canadensis (Fabaceae)'],
								['Geographic Distribution','Eastern and south-central United States, southward to northern Mexico.'],
								['Pollinators', 'Insects, including bees, wasps, flies, butterflies, skippers, and beetles.'],
								['Habitat', 'This small, short-lived deciduous tree is found in forest understory in moist rich woods, along the banks of streams, and abandoned farmlands.'],
								['Mature height', '15-30 feet'], 
								['Bloom period', 'March through May'],
								['IUCN threat status', 'Lower Risk/least concerned (LR/lc)'],
								['NatureServe conservation status', 'G5 - Secure',{'Ontario':'Presumed Extirpated','Connecticut':'Special Concern','New Jersey':'Endangered'}],
								['NatureServe_param', 'Cercis+canadensis'],
								['encyclopedia_index', '640323']
							]										
}


/* * * Functions * * */
function update_popup(id) {
	var item = poster_key[id];
	// DEV ONLY -- JUST TREES
	var data = trees[item]? trees[item] : "hang tight";
	//console.log(data);
	
	var popup = $("#info-window");
	// Set item common name and Latin name
	popup.children("h2:first-of-type").html(item);
	popup.children("h3:first-of-type").html("<em>"+data[0][1]+"</em>");
	// Iterate through bullet point data and build main popup content
	/*for(var i=1; i < data.length; i++;) {
	//	popup.children(".row:nth-of-type"+i+" :nth-of-type("+i+")").html(data[i][0]);
	//	popup.children(":nth-child("+i+")").html(data[i][1]);
	}*/
	
	// Go through each .row in popup; 
	// go through each column?? (i++)
	// put in the data at index i
	// i++
	var data_index = 1;
	popup.children(".row").each(function(row) {
		$(this).find(".col-sm-6").each(function(heading){
			// Update headings
			$(this).children("h4").html(data[data_index][0]);
			// Update data
			$(this).children("p").html(data[data_index][1]);
			data_index++;
		});
	});

}


var curr_info = "1";  // Track what is displayed in #info-window
var last_info = "0";

/* * * ON LOAD * * */

$(window).load(function(){
	// Size the poster overlay to match poster size (600:950)
	var poster_height = $("#poster").height();
	var poster_width = $("#poster").width();
	$("#markers-container").height(poster_height);
	
	// Position markers
	$("#1").css({left: '9%', top: '28%'});
	$("#2").css({right: '6%', top: '25%'});
	$("#3").css({left: '9%', top: '48%'});
	$("#4").css({right: '9%', top: '45%'});
	$("#5").css({left: '11%', top: '65%'});
	$("#6").css({right: '10%', top: '63%'});
	$("#7").css({left: '11%', top: '78%'});
	$("#8").css({right: '3%', top: '80%'});
	
	
	// Trigger info popup when any marker is clicked
	var id = "";
	for (marker in poster_key) {
		if(poster_key.hasOwnProperty(marker)) {
			id = "#"+marker;
			$(id).click(function(){
				// Load data
				update_popup($(this).attr("id"));
				// Position popup
				var marker_position = $(this).position();
				var left = marker_position.left;
				var top = marker_position.top;
				// Position info-window horizontally centered for small screens
				if($(window).width() <= 768) { 
					top = top + 48;
					$("#info-window").css({left: 'auto', top: top});
				} else {
				// Position info-window relative to marker for large screens
					if ( parseInt(this.id) % 2 === 0){
						left = left - ($("#info-window").width() + 35);
						$("#info-window").css({left: left, top: top});
					} else {
						left = left + 50;
						$("#info-window").css({left: left, top: top});
					}
				}
				// Display info-window
				var my_id = $(this).attr("id");
				last_info = curr_info;
				curr_info = my_id;
				//alert("last_info: "+last_info+", curr_info: "+curr_info);
				if ( last_info === curr_info ) {
					$("#info-window").toggle();
				} else {
					$("#info-window").css('display','block');	
				}
			});
		}
	}
	
	// Indicate active marker
	$(".tree-mark").click(function(){
		$(".tree-mark").not(this).removeClass("active");
		$(this).toggleClass("active");	
	});
			
	// Close info-window pop-up
	$(".close-window").click(function(){
		$(this).parent().toggle();
	});
	
});


/* * * ON RESIZE * * */

$(window).resize(function() {
	// Size the poster overlay to match poster size
	var poster_height = $("#poster").height();
	$("#markers-container").height(poster_height);	
});