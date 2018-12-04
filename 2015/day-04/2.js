'use strict';

var crypto = require('crypto');

module.exports = (input) => {

  var number = 1;
  var zeroes = '000000';
  while (true) {
    var hex = crypto.createHash('md5').update(input + number).digest('hex');
    if (hex.slice(0, zeroes.length) === zeroes) {
      break;
    }
    number++;
  }

  return number;

};
