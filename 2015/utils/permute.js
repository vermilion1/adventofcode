'use strict';

var permuteList = (list, memo, result) => {
  memo || (memo = []);
  result || (result = []);

  for (var i = 0; i < list.length; i++) {
    var char = list.splice(i, 1);
    if (list.length === 0) {
      result.push(memo.concat(char));
    }
    permuteList(list.slice(), memo.concat(char), result);
    list.splice(i, 0, char[0]);
  }

  return result;
};

var permuteRange = (min, max, size) => {
  var perms = [];
  if (size > 1) {
    for (var i = min; i <= max; i++) {
      var values = permuteRange(min, max - i, size - 1);
      for (var j = min; j < values.length; j++) {
        perms.push([i].concat(values[j]));
      }
    }
    return perms;
  }
  else {
    return [max];
  }
};

module.exports.list = permuteList;
module.exports.range = permuteRange;
