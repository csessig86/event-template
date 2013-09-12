// Convert strings to proper case
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// Map variables
var map;
var markerGroup = new L.FeatureGroup;

// Function that creates the map
function createMap() {
   console.log('test');
   // Grab the icon information from our Google spreadsheet
   var icons = "";
   var scheduleName = "";
   for (num_context = 0; num_context < context["sections"].length; ++num_context) {
      if (context["sections"][num_context]["map"] !== "") {
         icons = context["sections"][num_context]["map"];
      } else if (context["sections"][num_context]["schedule"] !== "") {
         scheduleName = context["sections"][num_context]["sectionname"];
      }
   }
   /// Map stuff
	map = new L.map('map-container', {
		center: [42.500555, -92.33349],
		zoom: 10
	});
	map.invalidateSize();
   
	L.tileLayer.provider('Esri.WorldImagery').addTo(map);

	// Creates the marker, place it on the map
	// And give it a popup box
	for (num_icons = 0; num_icons < icons.length; ++ num_icons) {
      var marker = L.AwesomeMarkers.icon({
    		icon: icons[num_icons]["icon"],
         color: icons[num_icons]["iconcolor"]
   	});

      latlong = new Array(icons[num_icons]["lat"], icons[num_icons]["long"]);
		layer = new L.marker(latlong, {
         icon: marker
      });

		// This code automatically searches 
		locationString = icons[num_icons]["popup"] + "";
      // console.log(icons[num]["searchschedule"]);
		if (icons[num_icons]["searchschedule"] === "TRUE") {
			var link = $('<a href="#' + scheduleName + '-map" data-ajax="false">Search through events at this location</a>').click(function(e) {
				var festivalLocation = $(e.target).parent().text().replace('Search through events at this location','');
				searchTable(festivalLocation);
				$('#search').val(festivalLocation);
			});
			var div = $('<div class="popup_box" />').html('<strong>' + locationString + '</strong><br />').append(link)[0];
		} else {
			var div = '<div class="popup_box" />' + '<strong>' + locationString + '</strong></div>';
		}
		layer.bindPopup(div);

   		map.addLayer(layer);
   		markerGroup.addLayer(layer);
   		// Determine background color for the icons in the map legend
   		if (icons[num_icons]["iconcolor"] === 'red') {
   			backgroundcolor = '#d63e2a';
   		} else if (icons[num_icons]["iconcolor"] === 'orange') {
   			backgroundcolor = '#f59630';
   		} else if (icons[num_icons]["iconcolor"] === 'green') {
   			backgroundcolor = '#72b026';
   		} else if (icons[num_icons]["iconcolor"] === 'blue') {
   			backgroundcolor = '#36a5d6';
   		} else if (icons[num_icons]["iconcolor"] === 'purple') {
   			backgroundcolor = '#d252b9';
   		} else if (icons[num_icons]["iconcolor"] === 'darkred') {
   			backgroundcolor = '#ac3b3f';
   		} else if (icons[num_icons]["iconcolor"] === 'darkblue') {
   			backgroundcolor = '#0067a6';
   		} else if (icons[num_icons]["iconcolor"] === 'darkgreen') {
   			backgroundcolor = '#788625';
   		} else if (icons[num_icons]["iconcolor"] === 'darkpurple') {
   			backgroundcolor = '#5b396b';
   		} else if (icons[num_icons]["iconcolor"] === 'cadetblue') {
   			backgroundcolor = '#436978';
   		}

   		// Create box for map legend
   		$('.description_box_text').append('<span style="background-color: ' + backgroundcolor + '; border: 1px solid #737373; margin-right: 5px;"><i class="' + icons[num_icons]["icon"] + ' icon-white" style="padding: 10px;"></i></span>' + icons[num_icons]["popup"] + '<br />');
   	};

   	// Use this to find out bounds of all our markers
   	markerBounds = markerGroup.getBounds();
   	// Then use that to center the map
	// Add a little bit of padding to make sure all icons fit onto mobile screens
	map.fitBounds(markerBounds.pad(0.5));

}