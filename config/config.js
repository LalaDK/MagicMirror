/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "0.0.0.0",	// Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
	ipWhitelist: [],									// you must set the sub path here. basePath must end with a /
	//ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "da",
	locale: "da-DK",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "MMM-WeatherBackground",
			// don't assign position.
			config: {}
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Næste begivenhed",
			position: "top_left",
			config: {
				maxTitleLength: 50,
				fadePoint: 0.8,
				customEvents: [
					{
						transform: {
							search: "\\[UEFA EURO 2024\\]",
							replace: ""
						}
					}
				],
				calendars: [
					{
						name: "mads",
						broadcastPastEvents: true,
						fetchInterval: 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/mads.eckardt%40gmail.com/public/basic.ics"
					},
					{
						name: "mette",
						broadcastPastEvents: true,
						fetchInterval: 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/52c739b1-c826-4d5b-b6ef-f1f264036679/cid-FE45C808DFA17455/calendar.ics"
					},
					{
						name: "helligdage",
						broadcastPastEvents: true,
						fetchInterval: 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/da.danish%23holiday%40group.v.calendar.google.com/public/basic.ics"
					},
					{
						name: "uefa-euro-2024",
						broadcastPastEvents: true,
						fetchInterval: 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "webcal://sofabold.dk/calendar/nationalturnement/439/1717192800/1720994370/alle/2?ical"
					}
				]
			}
		},
		{
			module: "MMM-CalendarExt3",
			position: "bottom_bar",
			config: {
				mode: "week",
				locale: "da-DK",
				firstDayOfWeek: 1,
				weeksInView: 3,
				weekIndex: 0,
				calendarSet: ["mads", "mette", "hellidage", "uefa-euro-2024"]
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "København",
				locationID: "2618425", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "d4a80088a90193ac3e99007e59765a0b"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Vejret",
			config: {
				fade: false,
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "København",
				locationID: "2618425", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "d4a80088a90193ac3e99007e59765a0b"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Seneste nyt",
						url: "https://www.dr.dk/nyheder/service/feeds/politik"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
