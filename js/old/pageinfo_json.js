// Our icons for our map
var icons = [
	{
		icon: 'icon-star',
		iconcolor: 'green',
		latlong: [42.500817,-92.33386],
		popup: 'Highland Games'
	},
	{
		icon: 'icon-music',
		iconcolor: 'red',
		latlong: [42.500544,-92.333457],
		popup: 'Cultural Events Center Stage'
	},
	{
		icon: 'icon-music',
		iconcolor: 'blue',
		latlong: [42.499234,-92.334479],
		popup: "Jameson's Public House"
	},
	{
		icon: 'icon-music',
		iconcolor: 'orange',
		latlong: [42.500872,-92.334788],
		popup: 'Park Avenue Stage'
	},
	{
		icon: 'icon-music',
		iconcolor: 'darkblue',
		latlong: [42.499089,-92.334927],
		popup: 'Lincoln Savings Bank Stage'
	},
	{
		icon: 'icon-food',
		iconcolor: 'darkred',
		latlong: [42.500212,-92.333565],
		popup: 'Food Court'
	},
	{
		icon: 'icon-star',
		iconcolor: 'darkpurple',
		latlong: [42.49963,-92.333817],
		popup: 'Family Area'
	},
	{
		icon: 'icon-beer',
		iconcolor: 'cadetblue',
		latlong: [42.500283,-92.334423],
		popup: 'Beer Garden'
	},
	{
		icon: 'icon-gift',
		iconcolor: 'purple',
		latlong: [42.499963,-92.33431],
		popup: 'Irish Market'
	}
];


// Page information
var context  = {
	"title": "Irish Fest",
	"sections": [
	{
		"sectionname": "Article",
		"sectionicon": "icon-music",
		"article": [
			{
				"header": "Pipin' Hot",
				"subhead": "Bagpipe rockers heat up Irish Fest",
				"image": "images/mainphoto.jpg",
				"image-caption": "Red Hot Chilli Pipers (Courtesy photo)",
				"image-placement-right": true,
				"share": true,
				"more": "WATERLOO, Iowa --- Since they walked away with the top prize in 2007 on the UK primetime TV talent show “When Will I Be Famous,” the Red Hot Chilli Pipers haven’t stopped for a breath, other than to inflate their bagpipes.</p><p>You’re in Irish luck — The Chillis are stopping by for two shows during the Iowa Irish Fest Aug. 2-4 in downtown Waterloo.</p><p>Formed in 2002, the band has fast become a global phenomenon, taking their signature “bagrock” sound to the masses and rocking far-flung shores with their unique fusion of rocked up bagpipes and clever covers of popular songs from all genres.</p><p>The band's first show is Saturday night from 10 to 11:30 p.m. on the Park Avenue Stage. Their second performance is Sunday from 2:30 to 4 p.m. at the same stage.",
				"caption": "- Article appeared in the August edition of <a href='http://wcfcourier.com/entertainment/' target='_blank'>Pulse Magazine</a>."

			},
			{
				"header": "About the festival",
				"more": "Iowa Irish Fest is dedicated to celebrating Irish culture in Iowa and takes place annually during the first full weekend of August. Admission is $15 for a three-day weekend pass and are available at the gate. Kids 12 and younger are free.</p><p>Here's your complete guide to the festivities. Use the links below to toggle between sections and learn more about the festival.</p><p><strong>Mobile users</strong>: Add a link to this website on the home screen of your mobile phone to browse events while attending Irish Fest.</p><p>To do this on an iPhone, click the share button at the bottom of the screen with the arrow that points to the right. Then click 'Add to Home Screen'."
			}
		]	
	},
	{
		"sectionname": "Schedule",
		"sectionicon": "icon-calendar",
		"schedule": [
			{
				"box-number": "first-schedule",
				"date": "Friday, August 2",
				"events": [
					{"time":"4 – 4:30 p.m.","event":"Parade and festival opening","location":"Park Avenue Stage (Lincoln Park)","category":"Parade","info":"The festival officially opens Friday at 4 p.m."},
					{"time":"4:30 – 5 p.m.","event":"Trinity Irish Dancers","location":"Park Avenue Stage (Lincoln Park)","category":"Entertainment","info":"This Irish dancing group is based out of Chicago. For more information, <a href='http://www.trinity-dancers.com/' target='_blank'>visit their website</a>."},
					{"time":"4:30 – 6 p.m.","event":"Dublin City Ramblers","location":"Lincoln Savings Bank Stage (E. 4th & Lafayette)","category":"Music","info":"The Dublin City Ramblers are an Irish folk band based in Dublin, Ireland that first formed in 1970. They play ballads, folk  and foot-tapping Irish music. For more information, <a href='http://dublincityramblers.com/' target='_blank'>visit their website</a>."},
					{"time":"4:30 – 6 p.m.","event":"Langer’s Ball","location":"Jameson's Stage (Inside  Jameson's Public House)","category":"Music","info":"The Langer's Ball are a Celtic punk band based out of St. Paul, Minnesota that has been performing since 2007. They play Irish ballads with a hint of rock n' roll.  For more information, <a href='http://thelangersball.com/' target='_blank'>visit their website</a>."},
					{"time":"4:45 – 5 p.m.","event":"Highland games overview","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Sports","info":"Competitors from across the Midwest will wear kilts and compete in power-lifting events that celebrate Celtic culture. This year's events include: Clachneart, Braemar stone, weight throws, sheaf Toss, weight over bar, caber toss and Irish super heavy two-handed stone throw. For more information, <a href='http://wcfcourier.com/news/local/green-olympics-come-to-irish-fest/article_298f36e0-e1ef-5bac-a217-268ef58c857f.html' target='_blank'>read last year' story on the events</a>."},
					{"time":"5 – 5:30 p.m.","event":"The Iowa Scottish Pipes & Drums","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Music","info":"This group based in Des Moines was founded from the membership of the Iowa Scottish Heritage Society in 1975. For more information, <a href='http://www.iowascottish.com/' target='_blank'>visit their website</a>."},
					{"time":"5 – 8 p.m.","event":"Highland games","location":"Lincoln Park","category":"Sports","info":"Competitors from the across the Midwest will wear kilts and compete in power-lifting events that celebrate Celtic culture. This year's events include: Clachneart, Braemar stone, weight throws, sheaf toss, weight over bar, caber toss and Irish super heavy two-handed stone throw. For more information, <a href='http://wcfcourier.com/news/local/green-olympics-come-to-irish-fest/article_298f36e0-e1ef-5bac-a217-268ef58c857f.html' target='_blank'>read last year's story on the events</a>."},
					{"time":"5:30 – 7 p.m.","event":"The Killdares","location":"Park Avenue Stage (Lincoln Park)","category":"Music","info":"The Killdares play hard-driving, alternative Celtic rock music. They were formed in Texas in 1996. For more information, <a href='http://killdares.com/site/' target='_blank'>visit their website</a>."},
					{"time":"6:30 – 8 p.m.","event":"Derek Warfield and the Young Wolfe Tones","location":"Lincoln Savings Bank Stage (E. 4th & Lafayette)","category":"Music","info":"Based in Ireland, Derek Warfield founded the Wolfe Tones 40 years ago. Now, he has assembled a group of some of the finest young talents in the Irish music scene. In 2011, the group played 150 concerts in seven different countries. For more information, <a href='http://www.theyoungwolfetones.com/' target='_blank'>visit their website</a>."},
					{"time":"6:30 – 8 p.m.","event":"Exorna","location":"Jameson's Stage (Inside  Jameson's Public House)","category":"Music","info":"Front man Victor McMullan grew up in Northern Ireland singing in pubs. His childhood passion helped him start his band Exorna, who have been playing Irish pub music for the last 10 years. For more information, <a href='http://www.exorna.com/' target='_blank'>visit their website</a>."},
					{"time":"7 – 7:30 p.m.","event":"Trinity Irish Dancers Workshop","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Entertainment","info":"This Irish dancing group is based out of Chicago. For more information, <a href='http://www.trinity-dancers.com/' target='_blank'>visit their website</a>."},
					{"time":"7:30 – 9 p.m.","event":"Scythian","location":"Park Avenue Stage (Lincoln Park)","category":"Music","info":"Based in Washington D.C., this rousing and raucous Celtic band blends classical, Gyspy, bluegrass and Celtic music. For more information, <a href='http://www.scythianmusic.com/' target='_blank'>visit their website</a>."},
					{"time":"8:30 – 10 p.m.","event":"Switchback","location":"Lincoln Savings Bank Stage (E. 4th & Lafayette)","category":"Music","info":"Composed of Brian FitzGerald and Martin McCormack, Switchback has blended American Roots and Celtic Soul music  for the past two decades. The group plays mandolin, guitar and bass. For more information, <a href='http://www.waygoodmusic.com/' target='_blank'>visit their website</a>."},
					{"time":"9 – 9:30 p.m.","event":"Irish Gaelic language workshop","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Education","info":"Learn about the language of Irish Gaelic, known simply as Irish (or Gaeilge) in Ireland."},
					{"time":"9 p.m. – 1 a.m.","event":"Wylde Nept","location":"Jameson's Stage (Inside  Jameson's Public House)","category":"Music","info":"This group based out of Cedar Rapids plays traditional and original Celtic pub tunes. For more information, <a href='http://www.wyldenept.com/' target='_blank'>visit their website</a>."},
					{"time":"9:30 – 11 p.m.","event":"Gaelic Storm","location":"Park Avenue Stage (Lincoln Park)","category":"Music","info":"Based out of Santa Monica, California, this Celtic band plays traditional Irish tunes, Scottish music and original songs in both the Celtic and Celtic rock genres. Over the last 17 years, this band has produced nine albums and has become one of the most popular Celtic bands in the country. For more information, <a href='http://www.gaelicstorm.com/' target='_blank'>visit their website</a>."},
					{"time":"10:30 p.m. – 12 a.m.","event":"Mulligan Stew","location":"Lincoln Savings Bank Stage (E. 4th & Lafayette)","category":"Music","info":"Mulligan Stew is a Irish/Celtic band based out of Chicago that has been playing since 1978.  They play traditional Irish music, Irish drinking songs, folk, rock and more. For more information, <a href='http://www.mulliganstewchicago.com/site/' target='_blank'>visit their website</a>."}
				]
			},
			{
				"box-number": "second-schedule",
				"date": "Saturday, August 3",
				"events": [
					{"time":"7:30 – 9 a.m.","event":"Irish Fest 5K run/walk","location":"Lincoln Park","category":"5K","info":"The annual 5K run/walk will take place Saturday morning. Prizes will be awarded to the male and female participants with the best Irish costumes. For more information, <a href='http://www.iowairishfest.com/wordpress/?page_id=440' target='_blank'>visit the Irish Fest website</a>."},
					{"time":"10 – 10:30 a.m.","event":"Proud Image","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Music","info":"The all-male chorus of about 25 members sings four-part a cappella music in barbershop style. Since being formed in 1979, the group has been crowned champions eight times in the Central States District, which is a barbershop organization that covers Iowa, Kansas, Missouri, Nebraska and South Dakota."},
					{"time":"10 a.m. – 8 p.m.","event":"Highland games","location":"Lincoln Park","category":"Sports","info":"Competitors from the across the Midwest will wear kilts and compete in power-lifting events that celebrate Celtic culture. This year's events include: Clachneart, Braemar stone, weight throws, sheaf toss, weight over bar, caber toss and Irish super heavy two-handed stone throw. For more information, <a href='http://wcfcourier.com/news/local/green-olympics-come-to-irish-fest/article_298f36e0-e1ef-5bac-a217-268ef58c857f.html' target='_blank'>read last year's story on the events</a>."},
					{"time":"10:30 – 11 a.m.","event":"Waterloo Country Cloggers","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Entertainment","info":"Formed in the 1980s, this group has helped reintroduce the area to clogging, which is a lively dance that relies on the feet to make noise and keep time to the downbeat of music. The evolving dance form traces its roots in America back to the Appalachian Mountains. For more information, <a href='http://wcfcourier.com/lifestyles/clogging-club-looks-to-teach-share-dancing/article_fdd08d60-1293-5521-a27a-f4c30c12daa6.html' target='_blank'>read our story on the group</a>."},
					{"time":"11 a.m. – 12:30 p.m.","event":"Irish stew competition","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Food","info":"Who makes the best Irish stew around? Find out during the Irish stew competition. Stew is a traditional Irish dish made with lamb, potatoes, carrots, onions and parsley. For more information on the competition, <a href='http://www.iowairishfest.com/wordpress/?page_id=1546' target='_blank'>visit the Irish Fest's website</a>."},
					{"time":"11:30 – 11:45 a.m.","event":"Welcome & Introduction from the Irish Fest committee","location":"Park Avenue Stage (Lincoln Park)","category":"Opening","info":"A welcoming to this year's Irish Fest"},
					{"time":"11:45 a.m. – 12:30 p.m.","event":"Aran Daughters, Celtic harp duo","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Music","info":"This group based out of Des Moines plays traditional Celtic music on their harps. Some of their songs are sang in Gaelic as well."},
					{"time":"12 – 12:30 p.m.","event":"Trinity Irish Dancers","location":"Park Avenue Stage (Lincoln Park)","category":"Entertainment","info":"This Irish dancing group is based out of Chicago. For more information, <a href='http://www.trinity-dancers.com/' target='_blank'>visit their website</a>."},
					{"time":"12 – 1:30 p.m.","event":"Irish language workshop","location":"Lincoln Savings Bank Stage (E. 4th & Lafayette)","category":"Education","info":"Learn about the language of Irish Gaelic, known simply as Irish (or Gaeilge) in Ireland."},
					{"time":"12 – 2:30 p.m.","event":"Exorna","location":"Jameson's Stage (Inside  Jameson's Public House)","category":"Music","info":"Front man Victor McMullan grew up in Northern Ireland singing in pubs. His childhood passion helped him start his band Exorna, who have been playing Irish pub music for the last 10 years. For more information, <a href='http://www.exorna.com/' target='_blank'>visit their website</a>."},
					{"time":"12:30 – 1 p.m.","event":"Irish historian","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Education","info":"Learn about the treasured history of Ireland"},
					{"time":"12:45 – 2 p.m.","event":"Dublin City Ramblers","location":"Park Avenue Stage (Lincoln Park)","category":"Music","info":"The Dublin City Ramblers are an Irish folk band based in Dublin, Ireland that first formed in 1970. They play ballads, folk  and foot-tapping Irish music. For more information, <a href='http://dublincityramblers.com/' target='_blank'>visit their website</a>."},
					{"time":"2 – 2:30 p.m.","event":"Trinity Irish Dancers (clinic)","location":"Lincoln Savings Bank Stage (E. 4th & Lafayette)","category":"Entertainment","info":"This Irish dancing group is based out of Chicago. For more information, <a href='http://www.trinity-dancers.com/' target='_blank'>visit their website</a>."},
					{"time":"2 – 2:30 p.m.","event":"Tir nag Nog Children’s Theatre","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Entertainment","info":"A performance by the Tir na nOg Children’s Theatre in Cedar Falls.The name is Gaelic for “Land of Youth.”"},
					{"time":"2:30 – 4 p.m.","event":"Scythian","location":"Park Avenue Stage (Lincoln Park)","category":"Music","info":"Based in Washington D.C., this rousing and raucous Celtic band blends classical, Gyspy, bluegrass and Celtic music. For more information, <a href='http://www.scythianmusic.com/' target='_blank'>visit their website</a>."},
					{"time":"3:15 – 4:45 p.m.","event":"Derek Warfield & the Young Wolfe Tones","location":"Lincoln Savings Bank Stage (E. 4th & Lafayette)","category":"Music","info":"Based in Ireland, Derek Warfield founded the Wolfe Tones 40 years ago. Now, he has assembled a group of some of the finest young talents in the Irish music scene. In 2011, the group played 150 concerts in seven different countries. For more information, <a href='http://www.theyoungwolfetones.com/' target='_blank'>visit their website</a>."},
					{"time":"4 – 4:30 p.m.","event":"Cedar Valley Irish historian","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Education","info":"Learn about the treasured history of Ireland"},
					{"time":"4 – 6:30 p.m.","event":"Langer’s Ball (full band)","location":"Jameson's Stage (Inside  Jameson's Public House)","category":"Music","info":"The Langer's Ball are a Celtic punk band based out of St. Paul, Minnesota that has been performing since 2007. They play Irish ballads with a hint of rock n' roll.  For more information, <a href='http://thelangersball.com/' target='_blank'>visit their website</a>."},
					{"time":"4:30 – 5 p.m.","event":"Trinity Irish Dancers","location":"Park Avenue Stage (Lincoln Park)","category":"Entertainment","info":"This Irish dancing group is based out of Chicago. For more information, <a href='http://www.trinity-dancers.com/' target='_blank'>visit their website</a>."},
					{"time":"5 – 5:45 p.m.","event":"Sons of the Mist","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Entertainment","info":"The Sons of the Mist will be giving demonstrations of authentic Scottish military weapons and equipment. For more information, <a href='https://sites.google.com/a/sonsofthemist.com/www/' target='_blank'>visit their website</a>."},
					{"time":"5:45 – 7:15 p.m.","event":"Pogey","location":"Park Avenue Stage (Lincoln Park)","category":"Music","info":"This group from Canada plays hard-driving roots/rock music. Their show combines electric guitar, fiddle, mandolin, acoustic guitar, bass, drums, bodhran and four-part vocal harmonies. For more information, <a href='http://www.pogey.ca/band/' target='_blank'>visit their website</a>."},
					{"time":"5:45 – 7:15 p.m.","event":"Switchback","location":"Lincoln Savings Bank Stage (E. 4th & Lafayette)","category":"Music","info":"Composed of Brian FitzGerald and Martin McCormack, Switchback has blended American Roots and Celtic Soul music  for the past two decades. The group plays mandolin, guitar and bass. For more information, <a href='http://www.waygoodmusic.com/' target='_blank'>visit their website</a>."},
					{"time":"7:15 – 7:45 p.m.","event":"Aran Daughters, Celtic harp duo","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Music","info":"This group based out of Des Moines plays traditional Celtic music on their harps. Some of their songs are sang in Gaelic as well."},
					{"time":"8 – 9:30 p.m.","event":"The Killdares","location":"Park Avenue Stage (Lincoln Park)","category":"Music","info":"The Killdares play hard-driving, alternative Celtic rock music. They were formed in Texas in 1996. For more information, <a href='http://killdares.com/site/' target='_blank'>visit their website</a>."},
					{"time":"8 p.m. – 12 a.m.","event":"Wylde Nept","location":"Jameson's Stage (Inside  Jameson's Public House)","category":"Music","info":"This group based out of Cedar Rapids plays traditional and original Celtic pub tunes. For more information, <a href='http://www.wyldenept.com/' target='_blank'>visit their website</a>."},
					{"time":"8:15 – 9:45 p.m.","event":"Mulligan Stew","location":"Lincoln Savings Bank Stage (E. 4th & Lafayette)","category":"Music","info":"Mulligan Stew is a Irish/Celtic band based out of Chicago that has been playing since 1978.  They play traditional Irish music, Irish drinking songs, folk, rock, and more. For more information, <a href='http://www.mulliganstewchicago.com/site/' target='_blank'>visit their website</a>."},
					{"time":"9:30 – 10 p.m.","event":"Bagpipers","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Music","info":"The bagpipe is a class of musical instrument popular in Scotland and Ireland. Evidence of the bagpipe dates back to the 18th century, with many ancient paintings, carvings and engravings from Europe displaying the infamous instrument."},
					{"time":"10 – 11:30 p.m.","event":"Red Hot Chilli Pipers","location":"Park Avenue Stage (Lincoln Park)","category":"Music","info":"Formed in 2002, this band from the UK has fast become a global phenomenon, taking their signature “bagrock” sound to the masses and rocking far-flung shores with their unique fusion of rocked up bagpipes and clever covers of popular songs from all genres. For more information, <a href='http://www.redhotchillipipers.co.uk/' target='_blank'>visit their website</a>."},
					{"time":"10:30 p.m. – 12 a.m.","event":"Langer’s Ball","location":"Lincoln Savings Bank Stage (E. 4th & Lafayette)","category":"Music","info":"The Langer's Ball are a Celtic punk band based out of St. Paul, Minnesota that has been performing since 2007. They play Irish ballads with a hint of rock n' roll.  For more information, <a href='http://thelangersball.com/' target='_blank'>visit their website</a>."}
				]
			},
			{
				"box-number": "third-schedule",
				"date": "Sunday, August 4",
				"events": [
					{"time":"10 – 11 a.m.","event":"Mass","location":"Park Avenue Stage (Lincoln Park)","category":"Mass","info":"An outdoor Catholic mass will be held once again this year. Admission on Sunday before 10 a.m. will be free for anyone who brings with them two nonperishable items, which will be donated to the Northeast Iowa Food Bank. For more information, <a href='http://wcfcourier.com/news/local/irish-fest-has-mass-appeal/article_74dd4f2d-697c-53f6-9d86-e5aa7603e948.html' target='_blank'>read last year's story on the event</a>."},
					{"time":"10 a.m. – 12 p.m.","event":"Langer’s Ball","location":"Jameson's Stage (Inside  Jameson's Public House)","category":"Music","info":"The Langer's Ball are a Celtic punk band based out of St. Paul, Minnesota that has been performing since 2007. They play Irish ballads with a hint of rock n' roll.  For more information, <a href='http://thelangersball.com/' target='_blank'>visit their website</a>."},
					{"time":"11:15 – 11:45 a.m.","event":"Trinity Irish Dancers","location":"Park Avenue Stage (Lincoln Park)","category":"Entertainment","info":"This Irish dancing group is based out of Chicago. For more information, <a href='http://www.trinity-dancers.com/' target='_blank'>visit their website</a>."},
					{"time":"12:15 – 1:45 p.m.","event":"Pogey","location":"Park Avenue Stage (Lincoln Park)","category":"Music","info":"This group from Canada plays hard-driving roots/rock music. Their show combines electric guitar, fiddle, mandolin, acoustic guitar, bass, drums, bodhran and four-part vocal harmonies. For more information, <a href='http://www.pogey.ca/band/' target='_blank'>visit their website</a>."},
					{"time":"2:30 – 4 p.m.","event":"Red Hot Chilli Pipers","location":"Park Avenue Stage (Lincoln Park)","category":"Music","info":"Formed in 2002, this band from the UK has fast become a global phenomenon, taking their signature “bagrock” sound to the masses and rocking far-flung shores with their unique fusion of rocked up bagpipes and clever covers of popular songs from all genres. For more information, <a href='http://www.redhotchillipipers.co.uk/' target='_blank'>visit their website</a>."},
					{"time":"11 – 11:15 a.m.","event":"Bagpipers","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Music","info":"The bagpipe is a class of musical instrument popular in Scotland and Ireland. Evidence of the bagpipe dates back to the 18th century, with many ancient paintings, carvings and engravings from Europe displaying the infamous instrument."},
					{"time":"11:45 a.m. – 12:15 p.m.","event":"Irish Gaelic language workshop","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Education","info":"Learn about the language of Irish Gaelic, known simply as Irish (or Gaeilge) in Ireland."},
					{"time":"1:45 – 2:30 p.m.","event":"Sons of the Mist","location":"Cultural Events Center Stage (Lincoln Park, East Corner)","category":"Education","info":"The Sons of the Mist will be giving demonstrations of authentic Scottish military weapons and equipment. For more information, <a href='https://sites.google.com/a/sonsofthemist.com/www/' target='_blank'>visit their website</a>."}
				]
			}	
		]
	},
	{
		"sectionname": "Map",
		"sectionicon": "icon-map-marker",
		"map": true
	},
	{
		"sectionname": "Info",
		"sectionicon": "icon-info-sign",
		"article": [
			{
				"header": "About",
				"more": "Iowa Irish Fest is dedicated to celebrating Irish culture in Iowa and takes place annually during the first full weekend of August."
			},
			{
				"header": "Hours",
				"more": "The festivities kick off at 4 p.m. Friday, 10:30 a.m. Saturday and 9 a.m. Sunday. The music goes until midnight on Friday and Saturday and 2:30 p.m. on Sunday."
			},
			{
				"header": "Ticket prices",
				"more": "Admission is $15 for a three-day weekend pass and are available at the gate. Kids 12 and younger are free."
			},
			{
				"header": "Sunday Mass",
				"image": "http://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/f/85/f850ef86-df5f-11e1-a003-001a4bcf887a/501f1395087bd.preview-620.jpg",
				"image-placement-right": true,
				"image-caption": "Monsignor Lyle Wilgenbusch blesses the communion during Sunday Mass in Lincoln Park downtown Waterloo on Aug. 5, 2012. (TIFFANY RUSHING / Courier Staff Photographer)",
				"more": "Religion has been a source of strength and strife throughout Ireland's history. During Irish Fest, organizers also wanted to honor the faith many festivalgoers share with their ancestors.</p><p>As a result, an outdoor Catholic mass will once again be held at this year's Irish Fest. Mass will be held at 10 a.m. at the Park Avenue Stage in Lincoln Park.</p><p>Admission on Sunday before 10 a.m. will be free for anyone who brings with them two nonperishable items, which will be donated to the Northeast Iowa Food Bank.</p><p>For coverage of last year's mass, <a href='http://wcfcourier.com/news/local/irish-fest-has-mass-appeal/article_74dd4f2d-697c-53f6-9d86-e5aa7603e948.html' target='_blank'>click here</a>."
			},
			{
				"header": "Family fun area",
				"more": "A family fun area, which includes a giant slide, a kids' gym, a face painter and more, is located on Mulberry Street south of East Fourth Street. Wristbands are available for kids 12 and under for $1. Wristbands are good for one day at the festival."
			},
			{
				"header": "Irish stew competition",
				"more": "Who makes the best Irish stew around? Find out during the Irish stew competition. Stew is a traditional Irish dish made with lamb, potatoes, carrots, onions and parsley. Entries cost $10. Prizes will be awarded to the top three cooks who make the best stews.</p><p>For more information on the competition, <a href='http://www.iowairishfest.com/wordpress/?page_id=1546' target='_blank'>visit the Irish Fest's website</a>."
			},
			{
				"header": "Highland games",
				"image": "http://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/a/21/a2131750-dea8-11e1-964f-0019bb2963f4/501ddffeb63ec.preview-620.jpg",
				"image-placement-right": false,
				"image-caption": "David LaMar, left, of Ames, competes in the Caber Toss, while Mark McVay, right, of Rock Island, looks on during the Highland Games aduring Iowa Irish Fest in Waterloo on Aug. 04, 2012. (DAWN J. SAGERT / Courier Staff Photographer)",
				"more": "Competitors from across the Midwest will wear kilts and compete in power-lifting events that celebrate Celtic culture.</p><p>This year's events include: Clachneart, Braemar stone, weight throws, sheaf toss, weight over bar, caber toss and Irish super heavy two-handed stone throw.</p><p>Many of the events have agricultural origins. For instance, the sheaf toss came from throwing wheat into a loft. The stones may have come from balancing scales when farms brought in their crops to be weighed.</p><p>The Highland games will take place from 5 to 8 p.m. Friday and 10 a.m. to 8 p.m. on Saturday. The events will be held in Lincoln Park.</p><p>For more information, <a href='http://wcfcourier.com/news/local/green-olympics-come-to-irish-fest/article_298f36e0-e1ef-5bac-a217-268ef58c857f.html' target='_blank'>read last year's story on the events</a>."
			},
			{
				"header": "5K run/walk",
				"more": "The annual 5K run/walk will take place Saturday at 7:30 a.m.. Prizes will be awarded to the male and female participants with the best Irish costumes.</p><p>For more information, <a href='http://www.iowairishfest.com/wordpress/?page_id=440' target='_blank'>visit the Irish Fest website</a>."
			}
		]
		}
	]
};

// This sets the width of the buttons in the footer nav bar
// Depends on how many buttons (or sections) are in the footer
var count = 0;
for (num in context.sections) {
	count += 1;
}
$(document).ready(function() {
	$('#footer_container .nav-button').css('width', (100 / count) + '%');
});

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

// This loop will spit out all the templates
for (num in templates) {
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