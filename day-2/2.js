var input = String(require('fs').readFileSync(__dirname + '/input.txt'));

function calculate(dimensions) {
	var dimensionsArr = dimensions.split('x').map(Number).sort((a, b) => a > b);
	var side1 = dimensionsArr[0];
	var side2 = dimensionsArr[1];
	var side3 = dimensionsArr[2];
	return (2 * side1) + (2 * side2) + (side1 * side2 * side3);
}

var total = input.split('\n').reduce((prev, dimensions) => {
  return prev + calculate(dimensions);
}, 0);

console.log(total);
