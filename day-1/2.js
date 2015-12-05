var input = String(require('fs').readFileSync(__dirname + '/input.txt'));

var currentFloor = 0;
var position = -1;

for (var i = 0; i < input.length; i++) {
  currentFloor += input[i] === '(' ? 1 : -1;
  if (currentFloor === -1) {
    position = i + 1;
    break;
  }
}

console.log(position);
