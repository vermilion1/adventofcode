'use strict';

module.exports = (input) => {

  return input.split('').reduce((prev, next) => {
    return prev + (next === '(' ? 1 : -1);
  }, 0);

};
