const config = require("./config");
const request = require("request");

const key = config.configAPI;
const url = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233?units=si`;

request({ url: url, json: true }, (error, response) => {
  const currently = response.body.currently;
  console.log(
    ` ${response.body.daily.data[0].summary} It is currently ${currently.temperature} degrees outside. There is a ${currently.precipProbability}% chance of rain`
  );
});
