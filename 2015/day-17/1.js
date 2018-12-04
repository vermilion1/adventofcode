'use strict';

var combine = require('../utils/combine');

var CAPACITY = 150;

var getContainers = (capacity, elements) => {
  return combine.list(elements).filter(combination => {
    return combination.reduce((prev, current) => prev + current, 0) === capacity;
  })
};

var getContainersLength = (input) => {
  return getContainers(CAPACITY, input.trim().split('\n').map(Number)).length;
};

module.exports = getContainersLength;
module.exports.getContainers = getContainers;
