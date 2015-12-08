module.exports = function (input) {
  'use strict';

  function escape(string) {
    return string
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\\"');
  }

  return input.trim().split('\n').reduce((value, line) => {
    return `"${escape(line)}"`.length - line.length + value;
  }, 0);

}; 
