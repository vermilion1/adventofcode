'use strict';

var slang = require('slang');

module.exports = (input) => {

  var forbiddenRe = /[iol]/;
  var increasingStraightRe = /abc|bcd|cde|def|efg|fgh|ghj|hjk|jkm|kmn|mnp|npq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/;
  var pairsRe = /([a-z])\1/g;

  var hasForbiddenChars = (password) => forbiddenRe.test(password);
  var hasIncreasingStraight = (password) => increasingStraightRe.test(password);

  var hasAtLeastTwoPairs = (password) => {
    var match = password.match(pairsRe);
    if (match) {
      return !match.every((value, index, array) => value === array[0]);
    }
    return false;
  };

  var isValid = (password) => {
    return !hasForbiddenChars(password) && hasIncreasingStraight(password) && hasAtLeastTwoPairs(password);
  };

  var generatePassword = (string) => {
    var exitString = new Array(string.length + 1).join('z');
    var password = string;
    while (true) {
      password = slang.successor(password);
      if (isValid(password)) {
        return password;
      }
      else if (password === exitString) {
        return false;
      }
    }
  };

  return generatePassword(input.trim());

}; 
