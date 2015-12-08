'use strict';

var task1 = require('./1');

function getSignals(input) {
  return task1.getSignals(input, {b: task1(input)})
}

module.exports = function (input) {
  return getSignals(input).a;
};

module.exports.getSignals = getSignals;
