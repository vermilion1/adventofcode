'use strict';

var sum = require('../utils/sum');
var factors = require('../utils/factors');

module.exports = (input) => {

  var MAX_VISITS = 11;
  var MAX_HOUSES = 50;

  var visits = [];

  var getHousePresents = (houseNumber) => {
    var numbers = factors(houseNumber);
    var validNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
      var number = numbers[i];
      var visit = visits[number] |= 0;
      if (visit < MAX_HOUSES) {
        validNumbers.push(number);
      }
      visits[number] += 1;
    }
    return sum(validNumbers) * MAX_VISITS;
  };

  var getHouseNumber = (presents) => {
    var houseNumber = 1;
    while (getHousePresents(houseNumber) < presents) {
      houseNumber += 1;
    }
    return houseNumber;
  };

  return getHouseNumber(Number(input));

};
