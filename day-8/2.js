'use strict';

module.exports = (input) => {

  var escape = (string) => {
    return string
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\\"');
  };

  return input.trim().split('\n').reduce((value, line) => {
    return `"${escape(line)}"`.length - line.length + value;
  }, 0);

}; 
