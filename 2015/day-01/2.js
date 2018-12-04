'use strict';

module.exports = (input) => {

  var currentFloor = 0;
  var position = -1;

  for (var i = 0; i < input.length; i++) {
    currentFloor += input[i] === '(' ? 1 : -1;
    if (currentFloor === -1) {
      position = i + 1;
      break;
    }
  }

  return position;

};
