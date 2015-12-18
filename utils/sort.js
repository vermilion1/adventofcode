'use strict';

var asc = (a, b) => a > b ? 1 : a < b ? -1 : 0;
var desc = (a, b) => a > b ? -1 : a < b ? 1 : 0;
var lengthAsc = (a, b) => a.length > b.length ? 1 : a.length < b.length ? -1 : 0;
var lengthDesc = (a, b) => a.length > b.length ? -1 : a.length < b.length ? 1 : 0;

module.exports.asc = (array) => array.sort(asc);
module.exports.desc = (array) => array.sort(desc);
module.exports.lengthAsc = (array) => array.sort(lengthAsc);
module.exports.lengthDesc = (array) => array.sort(lengthDesc);
