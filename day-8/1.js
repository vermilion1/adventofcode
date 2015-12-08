module.exports = function (input) {
  'use strict';

  return input.trim().split('\n').reduce((value, line) => {
    return line.length - eval(line).length + value;
  }, 0);

}; 
