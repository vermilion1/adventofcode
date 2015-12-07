module.exports = function (input, wire) {
  'use strict';

  var task1 = require('./1');
  var aSignal = task1(input).a;
  return task1(input, {b: aSignal})

};
