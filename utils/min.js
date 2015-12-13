'use strict';

module.exports = (array) => {
  var result = Infinity;
  for (var i = 0; i < array.length; i++) {
    if (result > array[i]) {
      result = array[i];
    }
  }
  return result;
};
