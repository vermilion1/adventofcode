var input = String(require('fs').readFileSync(__dirname + '/input.txt'));

var floor = input.split('').reduce((prev, next) => {
  return prev + (next === '(' ? 1 : -1);
}, 0);

console.log(floor);
