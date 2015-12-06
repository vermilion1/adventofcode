module.exports = function (input) {
  'use strict';

  var vowels = 'aeiou'.split('');
  var forbidden = ['ab', 'cd', 'pq', 'xy'];
  var strings = input.split('\n');

  function isNice(string) {
    var forbiddenString = forbidden.find(phrase => string.indexOf(phrase) !== -1);
    if (forbiddenString) {
      return false;
    }

    var foundVowels = 0;
    var previousChar = null;
    var hasDoubleChar = false;
    for (var i = 0; i < string.length; i++) {
      var char = string[i];
      if (previousChar === char) {
        hasDoubleChar = true;
      }
      if (vowels.indexOf(char) !== -1) {
        foundVowels += 1;
      }
      if (hasDoubleChar && foundVowels >= 3) {
        return true;
      }
      previousChar = char;
    }
    return false;
  }

  return strings.reduce((prev, next) => prev + Number(isNice(next)), 0);

};
