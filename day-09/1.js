'use strict';

var min = require('../utils/min');
var permute = require('../utils/permute');

module.exports = (input) => {

  var re = /^(.*) to (.*) = (\d+)$/;
  var cities = {};

  var calculateDistance = (citiesNames) => {
    return citiesNames.map((city, index) => {
      if (index > 0) {
        return cities[citiesNames[index - 1]][city];
      } else {
        return 0;
      }
    }).reduce((prev, next) => prev + next);
  };

  input.trim().split('\n').forEach(route => {
    var parsed = route.match(re);
    var distance = Number(parsed[3]);
    var cityFrom = parsed[1];
    var cityTo = parsed[2];
    var cityFromMap = cities[cityFrom] || (cities[cityFrom] = {});
    var cityToMap = cities[cityTo] || (cities[cityTo] = {});
    cityFromMap[cityTo] = distance;
    cityToMap[cityFrom] = distance;
  });

  var permutations = permute.list(Object.keys(cities));
  var distances = permutations.map(cities => calculateDistance(cities));

  return min(distances);

}; 
