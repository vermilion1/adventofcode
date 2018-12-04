'use strict';

module.exports = input => {
  const rows = input.split('\n');

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const letters = rows[rowIndex];

    for (let letterIndex = 0; letterIndex < letters.length; letterIndex++) {
      const firstGroup = letters.slice(0, letterIndex);
      const secondGroup = letters.slice(letterIndex + 1);
      const re = new RegExp(`(${firstGroup})[a-z](${secondGroup})`);

      for (let remainingIndex = rowIndex + 1; remainingIndex < rows.length; remainingIndex++) {
        const result = rows[remainingIndex].match(re);
        if (result) {
          return result[1] + result[2];
        }
      }
    }
  }
};
