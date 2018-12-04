'use strict';

var sum = require('../utils/sum');
var factors = require('../utils/factors');

module.exports = (input) => {

  var MAX_VISITS = 10;

  var getHousePresents = (houseNumber) => sum(factors(houseNumber)) * MAX_VISITS;
  var getHouseNumber = (presents) => {
    var houseNumber = 1;
    while (getHousePresents(houseNumber) < presents) {
      houseNumber += 1;
    }
    return houseNumber;
  };

  return getHouseNumber(Number(input));

};
