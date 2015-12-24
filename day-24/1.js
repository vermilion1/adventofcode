'use strict';

var sum = require('../utils/sum');
var multiply = require('../utils/multiply');
var combine = require('../utils/combine');

module.exports = (input) => {

  var GROUPS = 3;

  var boxes = input.trim().split('\n').map(Number);
  var maxInFirstGroup = boxes.length / GROUPS;
  var groupWeight = sum(boxes) / GROUPS;
  var combinations = combine.list(boxes, 1, maxInFirstGroup).filter(list => sum(list) === groupWeight);
  var sorted = combinations.sort((a, b) => {
    if (a.length === b.length) {
      var qeA = multiply(a);
      var qeB = multiply(b);
      return qeA === qeB ? 0 : qeA > qeB ? 1 : -1;
    }
    return a.length > b.length ? 1 : -1;
  });

  return multiply(sorted[0]);

};
