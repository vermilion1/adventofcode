'use strict';

module.exports = input => {
  const re = /([a-z])\1+/ig;
  const react = str => {
    return str.replace(re, letters => {
      for (let i = 1; i < letters.length; i++) {
        if (letters[i - 1] !== letters[i]) {
          return letters.slice(0, i - 1) + letters.slice(i + 1);
        }
      }
      return letters;
    });
  };

  while(true) {
    if (input === (input = react(input))) {
      return input.length;
    }
  }
};
