'use strict';

var max = require('../utils/max');

var INTERVAL = 2503;
var RE = /([a-zA-Z]+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds./;
var States = {FLYING: 'running', RESTING: 'resting'};

var parseData = (data) => {
  return data.map(line => {
    var match = line.match(RE);
    if (match) {
      return {
        state: States.FLYING,
        speed: +match[2],
        distance: +match[3],
        rest: +match[4],
        progress: 0,
        flied: 0
      };
    }
  });
};

var calculateScores = (reindeers, interval) => {
  var reindeersLength = reindeers.length;
  var scores = new Array(reindeersLength);

  while (interval-- > 0) {
    var distances = new Array(reindeersLength);
    var maxDistance = -Infinity;

    for (let i = 0; i < reindeersLength; i++) {
      var reindeer = reindeers[i];
      reindeer.progress += 1;

      switch (reindeer.state) {
        case States.FLYING:
          reindeer.flied += reindeer.speed;
          if (reindeer.progress >= reindeer.distance) {
            reindeer.progress = 0;
            reindeer.state = States.RESTING;
          }
          break;
        case States.RESTING:
          if (reindeer.progress >= reindeer.rest) {
            reindeer.progress = 0;
            reindeer.state = States.FLYING;
          }
          break;
      }

      distances[i] = reindeer.flied;
      maxDistance < reindeer.flied && (maxDistance = reindeer.flied);
    }

    for (let i = 0; i < reindeersLength; i++) {
      scores[i] = (reindeers[i].flied === maxDistance ? 1 : 0) + (scores[i] | 0);
    }
  }

  return scores;
};

var getHighestScore = (data, interval) => {
  var reindeers = parseData(data.trim().split('\n'));
  var scores = calculateScores(reindeers, interval);
  return max(scores);
};

module.exports = (input) => getHighestScore(input, INTERVAL);
module.exports.getHighestScore = getHighestScore; 
