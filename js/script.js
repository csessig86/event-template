// Variables to use with hash
var firstBox = "";
var mapName = "";
var scheduleName = "";

// Hash rules everything around me
// Determine what will be displayed on the page based on hash
function hashChange() {
	// Scroll window to the top
	window.scrollTo(0,0);
	// Collect the hash
	var hash = window.location.hash;

	// Capture the first box name, schedule name and map name
	// For hash usage later

	// All the sections that are dynamically added are put into a DIV with the class boxes
	// We have to show that DIV first
	// If it doesn't have a hash, give it #article
	if (hash === "" || hash === "#") {
		hash = '#' + firstBox;
	}
	
	// Show the share box with the first box
	// Or hide if it isn't
	if (hash === "#" + firstBox) {
		$('#share').show();
	} else {
		$('#share').hide();
	}
	
	// Show, hide appropriate boxes
	// We have a special condition for links sent from map popup box
	// To the schedule
	// Which auto fills the search box
	if (hash !== '#' + scheduleName + '-map') {
		$('#search').val('');
		searchTable('');
		$("input[type='checkbox']").checkboxradio();
		$("input[type='checkbox']").attr("checked",true).checkboxradio("refresh"); 
		$(hash + '-box').siblings().hide();
		$(hash + '-box').show();
	} else {
		$('#' + scheduleName + '-box').siblings().hide();
		$('#' + scheduleName + '-box').show();
	}

	// Create the map after all the DIV it is in is already shown
	if (hash === '#' + mapName) {
		// Only run function if we haven't already created the map
		if (map === undefined) {
			createMap();
		}
	}

	// Change background color of selected section in nav bar
	// Change the other DIVs in the nav bar so they have the default background color
	if (hash !== '#' + scheduleName + '-map') {
		// This changes the color of the button that was clicked
		$(hash + '-nav-link').css('background-color', '#5c3506');
		// This sets the other buttons to the default color
		$(hash + '-nav-link').parent().parent().siblings().children().children().css('background-color', '#744308');
	} else {
		// This changes the color of the button that was clicked
		$('#' + scheduleName + '-nav-link').css('background-color', '#5c3506');
		// This sets the other buttons to the default color
		$('#' + scheduleName + '-nav-link').parent().parent().siblings().children().children().css('background-color', '#744308');
	}
}

// This is called whenever someone beings typing something in the search bar
// Under the schedule section
function searchTable(inputVal) {
	var table = $('.tblData');
	table.find('tr').each(function(index, row) {
		var allCells = $(row).find('td');
		if(allCells.length > 0) {
			var found = false;
			allCells.each(function(index, td) {
				var regExp = new RegExp(inputVal, 'i');
				if(regExp.test($(td).text())) {
					found = true;
					return false;
				}
			});
			if(found == true) {
				$(row).show();
			} else {
				$(row).hide();
			}
		}
	});
};

function startupApp() {
	// This loop will spit out all the template
	for (num = 0; num < templates.length; ++num) {
		var source = $(templates[num]["templatesource"] + "").html();
		var handlebarscompile = Handlebars.compile(source);
	
		// Determine if we are rendering the template at the beginning
		// Or the end of the DIV
		if (templates[num]["placement"] === "append") {
			$(templates[num]["templatehtml"] + "").append(handlebarscompile(context));
		} else if (templates[num]["placement"] === "prepend") {
			$(templates[num]["templatehtml"] + "").prepend(handlebarscompile(context));
		}
	}

	// Load everything else up after JSON variable is created

	// This sets the width of the buttons in the footer nav bar
	// Depends on how many buttons (or sections) are in the footer
	var count = 0;
	for (num_sections = 0; num_sections < context["sections"].length; ++num_sections) {
		count = count + 1;
		// This adds padding to the top of the DIVs that aren't the first,
		// which has the share DIV above it
		// And maps, which take up the whole screen
		if (count > 1 && context["sections"][num_sections]["map"] === "") {
			var addPaddingDiv = '#' + context["sections"][num_sections]["sectionname"] + '-box' + "";
			$(addPaddingDiv).css('padding-top', '65px');
		}
	}
	$('#footer_container .nav-button').css('width', (100 / count) + '%');

	// Filter by day for the schedule	
	$('.filter_boxes').on('click', function(e) {
		scheduleBox = $(e.target).attr('id') + '-box';
		if ($(e.target).prop('checked') === true) {
			$('#' + scheduleBox).show();
		} else {
			$('#' + scheduleBox).hide();
		};
	});

	// This is used to toggle map legend on map page
	isVisibleDescription = false;
	$('.toggle_description').click(function() {
		if (isVisibleDescription === false) {
			$('.description_box_cover').show();
			$('.description_box').show();
			isVisibleDescription = true;
		} else {
			$('.description_box').hide();
			$('.description_box_cover').hide();
			isVisibleDescription = false;
		}
	});
	for (num_sections = 0; num_sections < context["sections"].length; ++num_sections) {
		firstBox = context["sections"][0]["sectionname"];
		if (context["sections"][num_sections]["map"] !== "") {
			mapName = context["sections"][num_sections]["sectionname"];
		} else if (context["sections"][num_sections]["schedule"] !== "") {
			scheduleName = context["sections"][num_sections]["sectionname"];
		}
	}

	// Schedule stuff
	// This fires up the searchTable function whenever someone types something
	$('#search').keyup(function() {
		searchTable($(this).val());
	});
	
	// Load right content according to the hash
	hashChange();
};

// Call hash change function when... you guessed it... the hash changes
$(window).hashchange( function(){
	hashChange();
});