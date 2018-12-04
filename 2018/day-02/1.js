'use strict';

module.exports = input => {
  const matches = {
    'two': 0,
    'three': 0,
  };

  const getIncreaseFn = (key) => {
    const rawValue = matches[key];
    return () => {
      matches[key] += (matches[key] === rawValue);
    }
  };

  input.split('\n').forEach(letters => {
    const increaseTwice = getIncreaseFn('two');
    const increaseThrice = getIncreaseFn('three');

    letters.split('').forEach(letter => {
      switch(letters.split(letter).length) {
        case 3:
          return increaseTwice();
        case 4:
          return increaseThrice();
      }
    })
  });

  return matches.two * matches.three;
};
