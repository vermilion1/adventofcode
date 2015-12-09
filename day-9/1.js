module.exports = function (input) {
  'use strict';

  var re = /^(.*) to (.*) = (\d+)$/;
  var cities = {};

  function permute(chars, memo, result) {
    memo || (memo = []);
    result || (result = []);

    for (var i = 0; i < chars.length; i++) {
      var char = chars.splice(i, 1);
      if (chars.length === 0) {
        result.push(memo.concat(char));
      }
      permute(chars.slice(), memo.concat(char), result);
      chars.splice(i, 0, char[0]);
    }

    return result;
  }

  function calculateDistance(citiesNames) {
    return citiesNames.map((city, index) => {
      if (index > 0) {
        return cities[citiesNames[index - 1]][city];
      } else {
        return 0;
      }
    }).reduce((prev, next) => prev + next);
  }

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

  var permutations = permute(Object.keys(cities));
  var distances = permutations.map(cities => calculateDistance(cities));

  return Math.min.apply(Math, distances);

}; 
