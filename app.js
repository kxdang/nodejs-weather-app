const config = require("./config");
const request = require("request");

const key = config.configAPI;
const url = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233`;

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.currently);
});
