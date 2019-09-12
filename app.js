const config = require("./config");
const request = require("request");

const key = config.configAPI;
const url = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233`;
console.log(url);
request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
