'use strict';

module.exports = (input) => {

  var isArray = (data) => Array.isArray(data);
  var isObject = (data) => typeof data === 'object';
  var isNumber = (data) => !isNaN(Number(data));

  var sumNumbers = (data) => {
    if (isArray(data)) {
      return data.reduce((prev, item) => prev + sumNumbers(item), 0)
    }
    else if (isNumber(data)) {
      return data;
    }
    else if (isObject(data)) {
      return sumNumbers(Object.keys(data).map(key => data[key]));
    }
    else {
      return 0;
    }
  };

  return sumNumbers(JSON.parse(input.trim()));

}; 
