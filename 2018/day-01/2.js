'use strict';

const findFirstRepeatingFrequency = (input, current, history) => {
  for (let i = 0; i < input.length; i++) {
    current += input[i];

    if (history.includes(current)) {
      return current;
    }

    history.push(current);
  }

  return findFirstRepeatingFrequency(input, current, history);
};

module.exports = input =>
  findFirstRepeatingFrequency(input.split('\n').map(Number), 0, [0]);

