'use strict';

var asc = (a, b) => a > b ? 1 : a < b ? -1 : 0;
var desc = (a, b) => a > b ? -1 : a < b ? 1 : 0;

module.exports.asc = (array) => array.sort(asc);
module.exports.desc = (array) => array.sort(desc);
