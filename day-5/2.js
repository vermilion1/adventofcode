var input = String(require('fs').readFileSync(__dirname + '/input.txt'));

var strings = input.split('\n');

function isNice(string) {
  var hasPair = false;
  var repeats = false;
  for (var i = 0; i < string.length; i++) {
    if (string.slice(i + 2).indexOf(string[i] + string[i + 1]) !== -1) {
      hasPair = true;
    }
    if (string[i] === string[i + 2]) {
      repeats = true;
    }
    if (repeats && hasPair) {
      return true;
    }
  }
  return false;
}

var amount = 0;
for (var i = 0; i < strings.length; i++) {
  if (isNice(strings[i])) {
    amount++;
  }
}

console.log(amount);
