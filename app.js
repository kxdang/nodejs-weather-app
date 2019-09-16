const config = require("./config");
const request = require("request");
const geocode = require("./utils/geocode");

const key = config.configAPI;

// const url = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233?units=si`;
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     const currently = response.body.currently;
//     console.log(
//       `${response.body.daily.data[0].summary} It is currently ${currently.temperature} degrees outside. There is a ${currently.precipProbability}% chance of rain`
//     );
//   }
// });

// geocode("Mississauga", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/${key}/${lat},${long}?units=si`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      const currently = response.body.currently;
      callback(
        undefined,
        `${response.body.daily.data[0].summary} It is currently ${currently.temperature} degrees outside. There is a ${currently.precipProbability}% chance of rain`
      );
    }
  });
};

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
