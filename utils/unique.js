'use strict';

module.exports = (array) => {
  var result = [];
  array.forEach(element => {
    if (result.indexOf(element) === -1) {
      result.push(element);
    }
  });
  return result;
};
