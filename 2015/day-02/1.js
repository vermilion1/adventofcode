'use strict';

module.exports = (input) => {

  var calculate = (dimensions) => {
    var dimensionsArr = dimensions.split('x');
    var length = dimensionsArr[0];
    var width = dimensionsArr[1];
    var height = dimensionsArr[2];
    var lw = length * width;
    var lh = length * height;
    var wh = width * height;
    var min = Math.min(lw, lh, wh);
    return (2 * lw) + (2 * lh) + (2 * wh) + min;
  };

  return input.split('\n').reduce((prev, dimensions) => {
    return prev + calculate(dimensions);
  }, 0);

};
