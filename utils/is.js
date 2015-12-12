'use strict';

module.exports.array = (data) => Array.isArray(data);
module.exports.object = (data) => typeof data === 'object';
module.exports.number = (data) => !isNaN(Number(data));
