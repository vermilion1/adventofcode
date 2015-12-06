module.exports = function (input) {
  'use strict';

  var strings = input.split('\n');

  function isNice(string) {
    var hasPair = false;
    var repeats = false;
    for (var i = 0; i < string.length; i++) {
      if (string.slice(i + 2).indexOf(string[i] + string[i + 1]) !== -1) {
        hasPair = true;
      }
      if (string[i] === string[i + 2]) {
        repeats = true;
      }
      if (repeats && hasPair) {
        return true;
      }
    }
    return false;
  }

  return strings.reduce((prev, next) => prev + Number(isNice(next)), 0);

};
