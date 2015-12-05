var input = String(require('fs').readFileSync(__dirname + '/input.txt'));
var crypto = require('crypto');

var number = 1;
var zeroes = '00000';
while (true) {
  var hex = crypto.createHash('md5').update(input + number).digest('hex');
  if (hex.slice(0, zeroes.length) === zeroes) {
    break;
  }
  number++;
}

console.log(number);
