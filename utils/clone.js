'use strict';

var cloneArray = (array) => {
  var newArray = array.slice();
  for (var i = 0; i < newArray.length; i++) {
    if (Array.isArray(newArray[i])) {
      newArray[i] = cloneArray(newArray[i]);
    }
  }

  return newArray;
};

module.exports.array = cloneArray;
