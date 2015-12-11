'use strict';

var lookAndSay = (look) => {
  var chars = look.split('');
  var currentChar = chars[0];
  var lastChar = chars[chars.length - 1];
  var sequence = 1;
  var say = '';
  chars.slice(1).forEach(nextChar => {
    if (currentChar === nextChar) {
      sequence++;
    } else {
      say += sequence + currentChar;
      sequence = 1;
    }
    currentChar = nextChar;
  });

  return say + sequence + lastChar;
};

var getLookAndSayLength = (look, times) => {
  var result = String(look).trim();
  for (var i = 0; i < times; i++) {
    result = lookAndSay(result);
  }
  return result.length;
};

module.exports = (input) => {
  return getLookAndSayLength(input, 40);
}; 

module.exports.lookAndSay = lookAndSay;
module.exports.getLookAndSayLength = getLookAndSayLength;
