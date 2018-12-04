'use strict';

module.exports = (start, stop, step) => {
  step || (step = 1);

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = new Array(length);

  for (var i = 0; i < length; i++) {
    range[i] = start;
    start += step;
  }

  return range;
};
