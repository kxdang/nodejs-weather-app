const config = require("./config");
const request = require("request");

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

// Geocoding
const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3hkYW5nIiwiYSI6ImNrMGhidGtrcTAwenEzcXBwZG4zcG1qcWoifQ.9UesO7UBWMh7i7IBsGybRw&limit=1`;
request({ url: geoUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to service");
  } else if (response.body.features.length == 0) {
    console.log("Please search another term");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
