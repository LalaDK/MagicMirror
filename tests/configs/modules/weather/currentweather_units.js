/* Magic Mirror Test config default weather
 *
 * By fewieden https://github.com/fewieden
 * MIT Licensed.
 */
let config = {
	units: "imperial",

	modules: [
		{
			module: "weather",
			position: "bottom_bar",
			config: {
				location: "Munich",
				apiKey: "fake key",
				initialLoadDelay: 3000,
				decimalSymbol: ",",
				showHumidity: true
			}
		}
	]
};

config = Object.assign(require("../../default.js"), config);

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
