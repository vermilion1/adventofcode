'use strict';

var clone = require('../utils/clone');

var TIMES = 100;
var RE_ON = /\#/g;
var RE_OFF = /\./g;

var convertToMap = (string) => {
  return string.trim().split('\n').map(line => {
    return line.replace(RE_ON, 1).replace(RE_OFF, 0).split('').map(Number);
  })
};

var fixCorners = (map) => {
  var lastX = map.length - 1;
  var lastY = map[0].length - 1;
  map[0][0] = 1;
  map[0][lastX] = 1;
  map[lastY][0] = 1;
  map[lastY][lastX] = 1;
  return map;
};

var analyzeNeighbors = (map, y, x) => {
  var result = {on: 0, off: 0};
  var range = [-1, 0, 1];
  for (var i = 0; i < range.length; i++) {
    for (var j = 0; j < range.length; j++) {
      if (range[i] === 0 && range[j] === 0) {
        continue;
      }
      var foundY = map[y + range[i]];
      if (foundY) {
        var isOn = foundY[x + range[j]];
        if (isOn !== void 0) {
          isOn ? (result.on += 1) : (result.off += 1);
        }
      }
    }
  }
  return result;
};

var animate = (originalMap, times) => {
  if (times === 0) {
    return originalMap;
  }
  var map = clone.array(fixCorners(originalMap));
  for (var y = 0; y < map.length; y++) {
    for (var x = 0; x < map[y].length; x++) {
      var isOn = originalMap[y][x];
      var neighbors = analyzeNeighbors(originalMap, y, x);
      if (isOn) {
        map[y][x] = Number(neighbors.on === 2 || neighbors.on === 3);
      }
      else {
        map[y][x] = Number(neighbors.on === 3);
      }
    }
  }
  return animate(fixCorners(map), --times);
};

var countOn = (map) => {
  return map.reduce((prev, current) => prev + current.reduce((prev, current) => prev + current, 0), 0);
};

var countOnLightsAfterAnimation = (input) => {
  return countOn(animate(convertToMap(input), TIMES));
};

module.exports = countOnLightsAfterAnimation;
module.exports.convertToMap = convertToMap;
module.exports.animate = animate;
module.exports.countOn = countOn;
