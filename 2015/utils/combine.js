'use strict';

var combineList = function (list, min, max) {
  min || (min = 1);
  max || (max = list.length);

  var combine = function (n, src, got, all) {
    if (n === 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (var j = 0; j < src.length; j++) {
      combine(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
  };

  var all = [];
  for (var i = min; i < max; i++) {
    combine(i, list, [], all);
  }

  all.push(list);
  return all;
};

module.exports.list = combineList;
