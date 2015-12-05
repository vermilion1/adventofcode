var input = String(require('fs').readFileSync(__dirname + '/input.txt'));

function visit(x, y) {
  var key = [x, y].join(',');
  visited[key] || (visited[key] = 0);
  visited[key]++;
}

var x = 0;
var y = 0;
var visited = {};

visit(x, y);

input.split('').forEach((char) => {
  switch (char) {
    case '^':
      visit(x, ++y);
      break;
    case 'v':
      visit(x, --y);
      break;
    case '>':
      visit(++x, y);
      break;
    case '<':
      visit(--x, y);
      break;
  }
});

var total = Object.keys(visited).length;

console.log(total);
