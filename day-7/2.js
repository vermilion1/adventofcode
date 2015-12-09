'use strict';

var task1 = require('./1');

var getSignals = (input) => {
  return task1.getSignals(input, {b: task1(input)})
};

module.exports = (input) => {
  return getSignals(input).a;
};

module.exports.getSignals = getSignals;
