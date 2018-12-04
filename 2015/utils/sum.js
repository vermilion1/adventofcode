'use strict';

module.exports = (array) => {
  return array.reduce((prev, current) => prev + current, 0);
};
