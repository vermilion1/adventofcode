var input = String(require('fs').readFileSync(__dirname + '/input.txt'));
var crypto = require('crypto');

var number = 1;
var zeros = 5;
while(true) {
	var hex = crypto.createHash('md5').update(input + number).digest('hex');
	if (hex.slice(0, zeros) === new Array(zeros + 1).join(0)) {
		break;
	}
	number++;
}

console.log(number);
