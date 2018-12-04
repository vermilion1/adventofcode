'use strict';

var sum = require('../utils/sum');
var range = require('../utils/range');

var CODE_AT_RE = /Enter the code at row (\d+), column (\d+)/;
var PREVIOUS = 20151125;
var MULTIPLY_BY = 252533;
var DIVIDE_BY = 33554393;

var getCodeAt = (row, column) => {
  var previous = PREVIOUS;
  var rowStartsWith = sum(range(0, row)) + 1;
  var extra = sum(range(row + 1, row + column));
  var number = rowStartsWith + extra;

  while (number-- > 1) {
    previous = previous * MULTIPLY_BY % DIVIDE_BY;
  }

  return previous;
};

var getCodeForConsole = (input) => {
  return getCodeAt.apply(null, CODE_AT_RE.exec(input).slice(1).map(Number));
};

module.exports = (input) => getCodeForConsole(input);
module.exports.getCodeAt = getCodeAt;
