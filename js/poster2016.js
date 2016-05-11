
var poster_key = { 
	'1': 'Bigleaf Maple',  
	'2': 'Tulip Tree',
	'3': 'Northern Catalpa',
	'4': 'Black Willow',
	'5': 'Southern Crabapple',
	'6': 'Staghorn Sumac',
	'7': 'Flowering Dogwood',
	'8': 'Eastern Redbud',
	'a': 'Bufflehead Mason Bee'
}

// var trees = ajax object?? with all tree data mapped to tree name?
// including images??
var poster_data = {
	'Bigleaf Maple': { 'latin': 'Acer macrophyllum (Sapindaceae)',
										'blurb' : "This rapidly growing, towering deciduous tree is the second most abundant tree in the Pacific Northwest. Its distinctive 5-lobed leaves can reach over a foot in length and width, turning a brilliant yellow-gold in autumn. Flowers are green-yellow and scented. They appear before the leaves—from March, at low elevations and in the southern part of the range, to June, at high elevations and in the north. Pollination usually occurs within 2 to 4 weeks after the buds burst. According to radicalbotany.com, the solitary bee, <i>Osmia laeta</i> (synonym: <i>Osmia aglaia</i>), likely uses the bigleaf maple for food and habitat.",	
										 'facts': [['Geographic Distribution', 'Western United States and Canada, from British Columbia to California'],
										['Habitat', 'A large deciduous tree growing in moist woods, forests, and canyons'],
										['Pollinators', 'Insect pollinators include bees, flies, and beetles.'],		
										['Mature height', '60-100 feet'], 
										['Bloom period', 'Late March to June'],
										['IUCN threat status', 'Not yet assessed'],
										['NatureServe conservation status', 'G5 - Secure']],
										'NatureServe_param': 'Acer+macrophyllum',
										'encyclopedia_index': '582252'
									},
	'Tulip Tree': { 'latin': 'Liriodendron tulipifera (Magnoliaceae)',
										'blurb' : "Also known as Yellow Poplar, this handsome eastern hardwood holds the record for tallest eastern deciduous tree in North America. It produces large, saucer-shaped blossoms that attract plentiful insects and wildlife with its nectar. <i>Liriodendron tulipifera</i> has a six-petal flower, yellowish green at margin to deep orange at the center. Trees flower at 15 to 20 years and may continue producing flowers for 200 years. Flowering period is 2 to 6 weeks. Each flower is receptive for 12 to 24 hours. Evidence of tulip tree pollen movement by the bufflehead mason bee, <i>Osmia bucephala</i>, was found during a study by Kraemer & Favi (2005), in which they found pollen of this tree in the nest provisions of the mason bee.",	
								  'facts': [['Geographic Distribution', 'Eastern United States and Canada, from Vermont, west through southern Ontario, south to Louisiana, and east to northern Florida. State tree of Indiana and Tennessee'],
								['Habitat', 'This tall, deciduous, long-lived broadleaf tree is a shade-tolerant pioneer species.'],
								['Pollinators', 'Nectar and pollen attract miscellaneous flies, beetles, honey bees, bumble bees, and other long-tongued bees. Ruby-throated Hummingbirds also visit for nectar. Some self-pollination.'],
								['Mature height', '70-150 feet'], 
								['Bloom period', 'April to June'],
								['IUCN threat status', 'Lower Risk/least concern (LR/lc). It is very sensitive to high ozone concentrations.'],
								['NatureServe conservation status', 'G5 - Secure']],
								'NatureServe_param': 'Liriodendron+tulipifera',
								'encyclopedia_index': '1155834'
							 },
	'Northern Catalpa': { 'latin': 'Catalpa speciosa (Bignoniaceae)',
										'blurb' : "This large deciduous tree is popular as an ornamental tree due to its abundant and beautiful bell-shaped blossoms. It is also recognizable by its large, heart-shaped leaves. Flowers of <i>Catalpa speciosa</i> occur in large clusters of showy, white, bell-shaped corollas with yellow, orange, or purple interior spotting or streaking. Flowers are good for honey production. In a study by Stephenson & Thomas (1977), flowers of northern catalpa were effectively pollinated during the day by the bumble bee, <i>Bombus bimaculatus</i>, and the carpenter bee, <i>Xylocopa virginica</i>, and during the night by <i>Geometridae, Ctenuchidae, Noctuidae</i>, and <i>Lasiocampidae</i> moths.",
								'facts': [['Geographic Distribution','Native range was from southern Indiana and southern Illinois, south to southern Tennessee and eastern Arkansas. Now widely naturalized in northern and eastern U.S. and Ontario, Canada.'],
								['Habitat', 'This perennial deciduous tree prefers moist, deep, well-drained soil, but adapts to dry or wet soils. Areas with a history of disturbance are preferred.'],
								['Pollinators', 'Bees and moths.'],
								['Mature height', '50-90 feet'], 
								['Bloom period', 'Late spring to early summer'],
								['IUCN threat status', 'Not yet assessed.'],
								['NatureServe conservation status', 'G4 - Apparently Secure',{'Indiana': 'Rare'}]],
								'NatureServe_param': 'Catalpa+speciosa',
								'encyclopedia_index': '580333'
							},
	'Black Willow': {'latin': 'Salix nigra (Salicaceae)',
										'blurb' : "A fast-growing but short-lived tree, Black Willow grows into more of a traditional “tree” shape than any other of North America’s 90+ willow species. Requiring particularly damp soil conditions for seed germination, it often grows in stands near waterways and floodplains. <i>Salix nigra</i> trees produce many-flowered catkins at the time of or immediately preceding leafing out. In a study by Ostaff, et al. (2015), two syrphid flower flies and six andrenid bees, including <i>Andrena dunningi</i>, were seen visiting flowers and carrying pollen from black willow.",
								'facts': [['Geographic Distribution','Eastern United States, adjacent parts of Canada, and Mexico'],
								['Habitat', 'This short-lived deciduous tree is most common on river margins, streambanks and meadows where it occupies the lower, wetter, and often less sandy sites.'],
								['Pollinators', 'Insects, especially bees and flies.'],
								['Mature height', '30-90 feet'], 
								['Bloom period', 'February through late June'],
								['IUCN threat status', 'Not yet assessed.'],
								['NatureServe conservation status', 'G5 - Secure']],
								'NatureServe_param': 'Salix+nigra',
								'encyclopedia_index': '585446'
							},
	'Southern Crabapple': {'latin': 'Malus angustifolia (Rosaceae)',
										'blurb' : "Designated a shrub or small tree, crabapple is a common and valuable native species, popular with many types of wildlife for its nectar, pollen, and fruit. <i>Malus angustifolia</i> produces profuse fragrant pink flowers in early spring. Honey bees, <i>Apis mellifera</i>, are a frequent flower visitor.",
								'facts': [['Geographic Distribution','Throughout southeastern United States from southern Virginia, south to northern Florida, west to Louisiana, and north to Arkansas.'],
								['Habitat', 'This deciduous small tree grows in moist woods, woodland borders, stream banks, fence rows, and old fields.'],
								['Pollinators', 'Insects, especially bees.'],
								['Mature height', '20-35 feet'], 
								['Bloom period', 'March through May'],
								['IUCN threat status', 'Not yet assessed.'],
								['NatureServe conservation status', 'G5 - Secure',{'Florida':'threatened','Illinois':'Endangered','Kentucky':'Special Concern'}]],
								'NatureServe_param': 'Malus+angustifolia+var.+angustifolia',
								'encyclopedia_index': '633293'
							},
	'Staghorn Sumac': {'latin': 'Rhus typhina (Anacardiaceae)',
										'blurb' : "Sumac is an open-spreading shrub with velvety, antler-like branches and shaggy, compound leaves. Fruit of the sumac flower develops as distinctively furry, crimson-colored clusters, and can be boiled into a tea that resembles the flavor of raspberry lemonade. Carpenter bees create tunnel nests in the pith, causing little damage. A study by Stubbs, et al. (1992) lists the orange-belted bumble bee, <i>Bombus ternarius</i>, as a flower-visitor of staghorn sumac.",
								'facts': [['Geographic Distribution','Eastern North America, from Quebec and Maine, west to northern Minnesota, south to western Tennessee and northern Alabama, and east to northern Georgia.'],
								['Habitat', 'This deciduous small tree is found in forest edges and disturbed sites on dry soils.'],
								['Pollinators', 'Insects, including short-tongued bees, wasps, and flies.'],
								['Mature height', '15-50 feet'], 
								['Bloom period', 'April to July'],
								['IUCN threat status', 'Not yet assessed.'],
								['NatureServe conservation status', 'G5 - Secure']],
								'NatureServe_param': 'Rhus+typhina',
								'encyclopedia_index': '485569'
							},
	'Flowering Dogwood': {'latin': 'Cornus florida (Cornaceae)',
										'blurb' : "Considered one of the most magnificent of North America’s native flowering trees, this small, wide-crowned tree blooms early each spring with long-lasting small yellow flowers clustered into inflorescences that are surrounded by four large white or pink bracts. In a study by Rhoades, et al. (2011), flowers of <i>Cornus florida</i> were visited mostly by andrenid and halictid bees, and most commonly by the halictid bee, <i>Lasioglossum imitatum</i>. ",
								'facts': [['Geographic Distribution','Eastern North America, from southwestern Maine, west to southern Ontario and central Michigan, central Illinois, Missouri, eastern Kansas, eastern Oklahoma, and eastern Texas, south to Nuevo León and Veracruz in eastern Mexico, and east to central Florida.'],
								['Habitat', 'This deciduous multi-branched small tree is found in eastern deciduous and southern coniferous forests, floodplaines, ravines, and along fencerows.'],
								['Pollinators', 'Insects, including bees, wasps, flies, skippers, and beetles.'],
								['Mature height', '15-30 feet'], 
								['Bloom period', 'March through June'],
								['IUCN threat status', 'Not yet assessed.'],
								['NatureServe conservation status', 'G5 - Secure',{'Maine':'Endangered','New York':'Exploitably Vulnerable','Vermont':'Threatened'}]],
								'NatureServe_param': 'Cornus+florida',
								'encyclopedia_index': '582707'
							},
	'Eastern Redbud': { 'latin': 'Cercis canadensis (Fabaceae)',
										'blurb' : "A member of the pea family, redbud can be found as an under-story species in open woods. It is typically one of the first to bloom in spring, erupting in bright pink flowers that cover the branches in tightly packed clusters. In a study by Cane & Payne (1988), the blueberry bee, <i>Habropoda laboriosa</i>, visits eastern redbud for nectar and pollen.",
								'facts': [['Geographic Distribution','Eastern and south-central United States, southward to northern Mexico.'],
								['Habitat', 'This small, short-lived deciduous tree is found in forest understory in moist rich woods, along the banks of streams, and abandoned farmlands.'],
								['Pollinators', 'Insects, including bees, wasps, flies, butterflies, skippers, and beetles.'],
								['Mature height', '15-30 feet'], 
								['Bloom period', 'March through May'],
								['IUCN threat status', 'Lower Risk/least concerned (LR/lc)'],
								['NatureServe conservation status', 'G5 - Secure',{'Ontario':'Presumed Extirpated','Connecticut':'Special Concern','New Jersey':'Endangered'}]],
								'NatureServe_param': 'Cercis+canadensis',
								'encyclopedia_index': '640323'
							},
	'Bufflehead Mason Bee': { 'latin': 'Osmia bucephala (Megachilidae)',
										'blurb' : "The Bufflehead Mason Bee is not extensively studied but has been observed flying low to the ground in woodland habitats. These bees resemble small bumble bees but, like other mason bees, collect pollen on their under abdomen.",
								'facts': [['Geographic Distribution','British Columbia and the Yukon to Nova Scotia and the New England states, south to southern New Mexico and California in the West. Widespread in the East.'],
								['Habitat', 'Nests in dead wood, holes in wood blocks or pithy stems.'],
								['Size', 'Female - length 15-16 mm. Male - length 13-14 mm.'],
								['Identification', 'Black, with vague bluish reflections above.'], 
								['Plants Commonly Visited', '<i>Aesculus, Baptisia, Cercis, Dentaria, Dicentra, Erythronium, Liriodendron, Mertensia</i> and <i>Viola</i>.'],
								['NatureServe conservation status', 'G5 - Secure']],
								'NatureServe_param': 'Osmia+bucephala',
								'encyclopedia_index': '2753381'
							}										
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

function build_facts(id) {
	var item = poster_key[id];
	var facts = poster_data[item]["facts"];
	var html_output= "";
	for( var i=0; i < facts.length; i++ ) {
		if (i % 2 === 0) { //If the index is even, start the row
			html_output = html_output + "<div class='row basic-facts'>" ;
		}	
		html_output = html_output + "<div class='col-sm-6'>"
			+ "<h4>"+facts[i][0]+"</h4>"
      + "<p>"+facts[i][1]+"</p>"
      + "</div>";	
		if (i % 2 === 1 || i === facts.length - 1) { // If the index is odd, end the row
			html_output = html_output + "</div>"
		}
	}
	return html_output;
}

function update_popup(id,container) {
	container.empty();
	
	// Build header
	var item = poster_key[id];
	container.append("<h2>"+item+"</h2>");
	var latin_name = poster_data[item]["latin"];
	
	// Build basic facts
	container.append("<h3><em>"+latin_name+"</h3></em>");
	var basic_facts = build_facts(id,6);
	container.append(basic_facts);
	
	// Add NatureServe link 
	container.append(
	"<div class='row basic-facts'><div class='col-sm-6'>"
	+ "<h4>"+poster_data[item]["facts"][6][0]+"</h4>"
	+ "<p>"+poster_data[item]["facts"][6][1]+"</p>"
	+"</div></div>"
	);
	
	// Encyclopedia of Life
	container.append(
		"<div class='row basic-facts'><div class='col-xs-12'>"
		+ "<a href='http://www.eol.org/pages/"+poster_data[item]['encyclopedia_index']+"/overview' target='_blank' >"
		+ "<i>Encyclopedia of Life</i> overview <i class='fa fa-angle-right'></i></a></div></div>"
	);
	
	// Anchor link to info below
	container.append(
		"<div class='row basic-facts'><div class='col-xs-12'>"
		+ "<a href='#anchor-"+id+"'>"
		+ "Learn more below <i class='fa fa-angle-down'></i></a></div></div>"
	);
}

var curr_info = "1";  // Track what is displayed in #info-window
var last_info = "0";


/* * * READY * * */
$(document).ready(function(){
	// Trigger info popup when any marker is clicked
	var id = "";
	for (marker in poster_key) {
		if(poster_key.hasOwnProperty(marker)) {
			id = "#"+marker;
			$(id).click(function(){
			
				// Load data
				//update_popup($(this).attr("id")); 
				var popup = $("#info-window");
				update_popup($(this).attr("id"), popup);
				
				// Position popup
				var marker_position = $(this).position();
				var left = marker_position.left;
				var top = marker_position.top;
				// Position info-window horizontally centered for small screens
				if($(window).width() <= 768) { 
					top = top + 48;
					popup.css({left: 'auto', top: top});
				} else {
				// Position info-window relative to marker for large screens
					if ( parseInt(this.id) % 2 === 0){
						left = left - (popup.width() + 35);
						popup.css({left: left, top: top});
					} else {
						left = left + 50;
						popup.css({left: left, top: top});
					}
				}
				
				// Display info-window
				var my_id = $(this).attr("id");
				last_info = curr_info;
				curr_info = my_id;
				if ( last_info === curr_info ) {
					popup.toggle();
				} else {
					popup.css('display','block');	
				}
			});
		}
	}
	
	// Build Trees section 
	var tree_keys = ['1','2','3','4','5','6','7','8'];
	for (x in tree_keys) {
		var id = tree_keys[x];
		// Insert marker with anchor id
		$("#trees-container").append("<div id='anchor-"+id+"'>"+id+"</div>");
		// Create a new .tree-info div as a container
		$("#trees-container").append("<div class='tree-info'>");	
			
		// Build header
		var tree = poster_key[id];
		var data = poster_data[tree];
		var thumbnail = tree.replace(" ","_").toLowerCase();
		var container = $("#trees-container > .tree-info:last-child");
		container.append(
				"<div class='row'>"
			+ "<img src='Images/posters/2016/"+thumbnail+"_thumb.png' class='thumb' alt=''>"
			+ "<div class='name-slug'><h2>"+tree+"</h2>"
			+ "<h3>"+data['latin']+"</h3></div>"
			+ "</div>"
		);
		
		// Add blurb
		container.append(
			"<div class='row'><div class='col-xs-12'><p>"+ data['blurb'] +"</p></div></div>"
		);
		
		// Add images
		container.append(
			"<div class='row tree-imgs text-center'><div class='col-xs-12'>"
			+ "<img src='Images/posters/2016/"+thumbnail+"_leaf.jpg' alt='' />"
			+ "<span style='background-image:url(Images/posters/2016/"+thumbnail+".jpg);'></span>"
			+"</div></div>"
		);
		
		// Add basic facts
		container.append(build_facts(id));		
		// Add Encyclopedia of Life link
		container.append(
			"<div class='row basic-facts'><div class='col-xs-12'>"
			+ "<a href='http://www.eol.org/pages/"+poster_data[tree]['encyclopedia_index']+"/overview' target='_blank' >"
			+ "<i>Encyclopedia of Life</i> overview <i class='fa fa-angle-right'></i></a></div></div>"
		);
	}
	
	// Build Pollinators section
	var bee_keys = ['a'];
	for (x in bee_keys) {
		var id = bee_keys[x];
		// Insert marker with anchor id
		$("#bees-container").append("<div id='anchor-"+id+"'>"+id+"</div>");
		// Create a new .bee-info div as a container
		$("#bees-container").append("<div class='bee-info'>");	
		
		// Build header
		var bee = poster_key[id];
		var data = poster_data[bee];
		var thumbnail = bee.replace(/\s/g,"_").toLowerCase();
		var container = $("#bees-container > .bee-info:last-child");
		container.append(
				"<div class='row'>"
			+ "<a href='Images/posters/2016/"+thumbnail+"_full.jpg' target='_blank' >"
			+ "<img src='Images/posters/2016/"+thumbnail+"_thumb.png' class='thumb' alt=''></a>"
			+ "<div class='name-slug'><h2>"+bee+"</h2>"
			+ "<h3>"+data['latin']+"</h3></div>"
			+ "</div>"
		);
		
		// Add blurb
		container.append(
			"<div class='row'><div class='col-xs-12'><p>"+ data['blurb'] +"</p></div></div>"
		);
		
		// Add basic facts
		container.append(build_facts(id));		
		// Add Encyclopedia of Life link
		container.append(
			"<div class='row basic-facts'><div class='col-xs-12'>"
			+ "<a href='http://www.eol.org/pages/"+data['encyclopedia_index']+"/overview' target='_blank' >"
			+ "<i>Encyclopedia of Life</i> overview <i class='fa fa-angle-right'></i></a></div></div>"
		);
	}
});

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
		
	// Indicate active marker
	$(".tree-mark").click(function(){
		$(".tree-mark").not(this).removeClass("active");
		$(this).toggleClass("active");	
	});
			
	// Close info-window pop-up
	$(".close-window").click(function(){
		$(this).parent().toggle();
	});
	
	// Size encyclopedic tree images
	$(".tree-imgs span").each(function() {
		$(this).height($(this).prev("img").height());
	});
});


/* * * ON RESIZE * * */

$(window).resize(function() {
	// Size the poster overlay to match poster size
	var poster_height = $("#poster").height();
	$("#markers-container").height(poster_height);	
	
	// Size encyclopedic tree images
	$(".tree-imgs span").each(function() {
		$(this).height($(this).prev("img").height());
	});	
});