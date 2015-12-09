'use strict';

module.exports = (input) => {

  var SIZE = 1000;
  var TURN_ON = 'turn on';
  var TURN_OFF = 'turn off';
  var TOGGLE = 'toggle';
  var RE = new RegExp(`(${TURN_ON}|${TURN_OFF}|${TOGGLE}) (\\d+),(\\d+) through (\\d+),(\\d+)`);

  var map = [];

  var followInstructions = (instructions) => {
    instructions.forEach(followInstruction);
  };

  var followInstruction = (instruction) => {
    var parsed = instruction.match(RE);
    if (parsed === null) {
      return;
    }

    var command = parsed[1];
    var fromX = +parsed[2];
    var fromY = +parsed[3];
    var throughX = +parsed[4];
    var throughY = +parsed[5];

    switch (command) {
      case TURN_ON:
        doWithMap(fromX, fromY, throughX, throughY, (value) => 1);
        break;

      case TURN_OFF:
        doWithMap(fromX, fromY, throughX, throughY, (value) => 0);
        break;

      case TOGGLE:
        doWithMap(fromX, fromY, throughX, throughY, (value) => +!value);
        break;
    }
  };

  var createDefaultMap = () => {
    for (var i = 0; i < SIZE; i++) {
      map[i] = new Array(SIZE);
      for (var j = 0; j < SIZE; j++) {
        map[i][j] = 0;
      }
    }
  };

  var doWithMap = (fromX, fromY, throughX, throughY, doFn) => {
    for (var i = fromX; i <= throughX; i++) {
      for (var j = fromY; j <= throughY; j++) {
        map[i][j] = doFn(map[i][j]);
      }
    }
  };

  var countLit = () => {
    return map.join().split(',').map(Number).reduce((memo, next) => memo + next);
  };

  createDefaultMap();
  followInstructions(input.split('\n'));

  return countLit();

};
