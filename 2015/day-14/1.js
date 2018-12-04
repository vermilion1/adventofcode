'use strict';

var max = require('../utils/max');

var INTERVAL = 2503;
var RE = /([a-zA-Z]+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds./;

var parseData = (data) => {
  return data.map(line => {
    var match = line.match(RE);
    if (match) {
      return {
        speed: +match[2],
        distance: +match[3],
        rest: +match[4]
      };
    }
  });
};

var caclulateDistance = (reindeer, interval) => {
  var distance = 0;
  var restIn = reindeer.distance;
  while (interval-- > 0) {
    if (restIn === 0) {
      interval -= reindeer.rest - 1;
      restIn = reindeer.distance;
    }
    else {
      distance += reindeer.speed;
      restIn -= 1;
    }
  }
  return distance;
};

var getBestDistance = (data, interval) => {
  var reindeers = parseData(data.trim().split('\n'));
  var timings = reindeers.map(reindeer => caclulateDistance(reindeer, interval));
  return max(timings);
};

module.exports = (input) => getBestDistance(input, INTERVAL); 
module.exports.getBestDistance = getBestDistance;
