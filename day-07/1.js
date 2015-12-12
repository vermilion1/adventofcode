'use strict';

// I wish I have enough time to do this with single RegExp so it would simplify applyInstruction function.
// Maybe next time :)

var is = require('../utils/is');

var getSignals = (input, wires) => {

  var expressions = {
    AND: /^([0-9a-z]+) AND ([0-9a-z]+) -> ([a-z]+)$/,
    OR: /^([0-9a-z]+) OR ([0-9a-z]+) -> ([a-z]+)$/,
    NOT: /^NOT ([0-9a-z]+) -> ([a-z]+)$/,
    LSHIFT: /^([a-z]+) LSHIFT ([0-9]+) -> ([a-z]+)$/,
    RSHIFT: /^([a-z]+) RSHIFT ([0-9]+) -> ([a-z]+)$/,
    TRANSITION: /^([a-z]+) -> ([a-z]+)$/,
    SIGNAL: /^([0-9]+) -> ([a-z]+)$/
  };

  var areWiresHaveSignal = function (wires) {
    return ![].slice.call(arguments, 1).find(item => {
      return is.number(item) ? false : wires[item] === void 0;
    });
  };

  var applyInstruction = (instruction, wires) => {
    var match;
    var getWireSignalByMatchIndex = (index) => {
      return is.number(match[index]) ? Number(match[index]) : wires[match[index]];
    };

    if (match = instruction.match(expressions.AND)) {
      if (areWiresHaveSignal(wires, match[1], match[2])) {
        return wires[match[3]] = getWireSignalByMatchIndex(1) & getWireSignalByMatchIndex(2);
      }
    }
    else if (match = instruction.match(expressions.OR)) {
      if (areWiresHaveSignal(wires, match[1], match[2])) {
        return wires[match[3]] = getWireSignalByMatchIndex(1) | getWireSignalByMatchIndex(2);
      }
    }
    else if (match = instruction.match(expressions.NOT)) {
      if (areWiresHaveSignal(wires, match[1])) {
        return wires[match[2]] = (1 << 16) - 1 - getWireSignalByMatchIndex(1);
      }
    }
    else if (match = instruction.match(expressions.LSHIFT)) {
      if (areWiresHaveSignal(wires, match[1])) {
        return wires[match[3]] = getWireSignalByMatchIndex(1) << getWireSignalByMatchIndex(2);
      }
    }
    else if (match = instruction.match(expressions.RSHIFT)) {
      if (areWiresHaveSignal(wires, match[1])) {
        return wires[match[3]] = getWireSignalByMatchIndex(1) >> getWireSignalByMatchIndex(2);
      }
    }
    else if (match = instruction.match(expressions.TRANSITION)) {
      if (areWiresHaveSignal(wires, match[1])) {
        return wires[match[2]] = getWireSignalByMatchIndex(1);
      }
    }
    return false;
  }

  var applyInstructions = (instructions, wires) => {
    var queue = [];

    instructions.forEach(instruction => {
      var match = instruction.match(expressions.SIGNAL);
      if (match) {
        wires[match[2]] || (wires[match[2]] = +match[1]);
      }
      else {
        queue.push(instruction);
      }
    });

    while (queue.length) {
      var instruction = queue.shift();
      if (applyInstruction(instruction, wires) === false) {
        queue.push(instruction);
      }
    }

    return wires;
  };

  return applyInstructions(input.trim().split('\n'), wires || {});

};

module.exports = (input, wires) => {
  return getSignals(input, wires).a;
};

module.exports.getSignals = getSignals;
