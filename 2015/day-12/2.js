'use strict';

var is = require('../utils/is');

module.exports = (input) => {

  var sumNumbers = (data) => {
    if (is.array(data)) {
      return data.reduce((prev, item) => prev + sumNumbers(item), 0)
    }
    else if (is.number(data)) {
      return data;
    }
    else if (is.object(data)) {
      var values = Object.keys(data).map(key => data[key]);
      if (values.indexOf('red') === -1) {
        return sumNumbers(values);
      }
      return 0;
    }
    else {
      return 0;
    }
  };

  return sumNumbers(JSON.parse(input.trim()));

}; 
