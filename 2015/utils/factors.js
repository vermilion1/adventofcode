'use strict';

module.exports = (number) => {
  var factors = [];
  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};
