// Page information that we will build on
var context = {
	"title": "the NCC Fair",
	"meta": [],
	"sections": []
};

// Template sources and what DIVs they will appear in
var templates = [
	{
		"templatesource": "#sections-template",
		"templatehtml": "#content",
		"placement": "append"
	},
	{
		"templatesource": "#navbox-template",
		"templatehtml": "#footer_container",
		"placement": "append"
	},
	{
		"templatesource": "#guide-to-template",
		"templatehtml": "#header_container",
		"placement": "prepend"
	},
	{
		"templatesource": "#guide-to-template",
		"templatehtml": ".description_box_content",
		"placement": "prepend"
	}
];

// Here's the Tabletop feed
// First we'll initialize Tabletop with our spreadsheet
var jqueryNoConflict = jQuery;
jqueryNoConflict(document).ready(function(){
	initializeTabletopObject('0As3JvOeYDO50dE94QzNTUGJTcS1xQlJEYXZ3VHZXY0E');
});

// Pull data from Google spreadsheet
// And push to our function
function initializeTabletopObject(dataSpreadsheet){
	Tabletop.init({
		key: dataSpreadsheet,
		callback: loadSpreadsheet,
		debug: false
	});
};

function loadSpreadsheet(tabletopData, tabletop) {
	// Go through our Google spreadsheet
	// Stored in tabletopData variable
	// tabletopData = Worksheet
	for (num in tabletopData) {
		// Find our 'core' worksheet
		if (tabletopData[num].name === 'core') {
			for (num_elements = 0; num_elements < tabletopData[num].elements.length; ++num_elements) {
				// We have three page template options: "article," "schedule" and "map"
				// Use this loop to find out which one we have 
				// And push the correct data into the JSON variable "context"
				// That JSON variable will allow us to flesh out the app
				// And style it accordingly
				section_object = tabletopData[num].elements[num_elements]
				section_name = section_object["sectionname"];
				section_elements = tabletopData[section_name].elements;

				// Build out our section_object variable first
				// We'll add to 'context' last
				if (section_object["article"] === "TRUE") {
					section_object["article"] = section_elements;
				// Build up our schedule
				} else if (section_object["schedule"] === "TRUE") {
					section_object["schedule"] = [];
					// Run loop to see how many schedules we have
					// And add them to our JSON object accordingly
					for (num_schedule = 0; num_schedule < section_elements.length; ++num_schedule) {
						// console.log(num_schedule);
						// console.log(section_elements[num_schedule]["box-number"]);
						// console.log(section_elements[num_schedule]["date"]);
						// console.log(tabletopData[section_elements[num_schedule]["box-number"]].elements);
						// Push data from worksheet into section_object variable
						section_object["schedule"].push({
							"box-number": section_elements[num_schedule]["box-number"],
							"date": section_elements[num_schedule]["date"],
							"events": tabletopData[section_elements[num_schedule]["box-number"]].elements
						});
					}
				// Build our map
				} else if (section_object["map"] === "TRUE") {
					section_object["map"] = section_elements;
				}

				// Push to our context variable, which runs the app
				context["sections"].push(section_object);
			}
			// console.log(context);
		}
	}
	startupApp();
};