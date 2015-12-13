'use strict';

var permute = require('../utils/permute');

module.exports = (input) => {

  var RE = /([a-zA-Z]+) would (gain|lose) (\d+) happiness units by sitting next to ([a-zA-Z]+)/;

  var createMap = (data) => {
    var map = {};
    data.forEach(item => {
      var match = item.match(RE);
      if (match) {
        map[match[1]] || (map[match[1]] = {});
        map[match[1]][match[4]] = match[3] * (match[2] === 'lose' ? -1 : 1);
      }
    });
    return map;
  };

  var calculateHappiness = (data) => {
    var map = createMap(data);
    var options = permute(Object.keys(map));
    var happiness = options.map(people => {
      return people.reduce((prev, next, currentIndex, array) => {
        var lastIndex = array.length - 1;
        var prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        var nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        var person = map[array[currentIndex]];
        var rightTo = person[array[nextIndex]];
        var leftTo = person[array[prevIndex]];
        return prev + rightTo + leftTo;
      }, 0);
    });
    return Math.max.apply(Math, happiness);
  };

  return calculateHappiness(input.trim().split('\n'));

}; 
