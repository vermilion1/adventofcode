'use strict';

var combine = require('../utils/combine');
var sort = require('../utils/sort');

var CAPACITY = 150;

var getMinimumContainers = (capacity, elements) => {
  return sort.lengthAsc(combine.list(elements).filter(combination => {
    return combination.reduce((prev, current) => prev + current, 0) === capacity;
  }))[0];
};

var getMinimumContainersLength = (input) => {
  return getMinimumContainers(CAPACITY, input.trim().split('\n').map(Number)).length;
};

module.exports = getMinimumContainersLength;
module.exports.getMinimumContainers = getMinimumContainers;
