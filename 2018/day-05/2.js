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


  const getLengthAfterRemovingChar = (polymer, charToRemove) => {
    polymer = polymer.replace(new RegExp(charToRemove, 'gi'), '');

    while(true) {
      if (polymer === (polymer = react(polymer))) {
        return polymer.length;
      }
    }
  };

  const alphabet = input.toLowerCase().split('')
    .filter((item, index, list) => list.indexOf(item) === index);

  return Math.min(
    ...alphabet.map(char => getLengthAfterRemovingChar(input, char))
  );
};
