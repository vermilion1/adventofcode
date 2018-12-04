'use strict';

module.exports = (input) => {

  return input.trim().split('\n').reduce((value, line) => {
    return line.length - eval(line).length + value;
  }, 0);

}; 
