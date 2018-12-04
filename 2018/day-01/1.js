'use strict';

module.exports = input =>
  input.split('\n').reduce((prev, next) =>
    prev + Number(next), 0);