module.exports = function (input) {
  'use strict';

  return input.split('').reduce((prev, next) => {
    return prev + (next === '(' ? 1 : -1);
  }, 0);

};
