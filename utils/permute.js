'use strict';

function permute(chars, memo, result) {
  memo || (memo = []);
  result || (result = []);

  for (var i = 0; i < chars.length; i++) {
    var char = chars.splice(i, 1);
    if (chars.length === 0) {
      result.push(memo.concat(char));
    }
    permute(chars.slice(), memo.concat(char), result);
    chars.splice(i, 0, char[0]);
  }

  return result;
}

module.exports = permute;
