'use strict';

var task1 = require('./1');

module.exports = (input) => {
  return task1.run(input, {a: 1, b: 0}).b;
};
