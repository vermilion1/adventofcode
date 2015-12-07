module.exports = function (input, wires) {
  'use strict';

  var expressions = {
    AND: /^([0-9a-z]+) AND ([0-9a-z]+) -> ([a-z]+)$/,
    OR: /^([0-9a-z]+) OR ([0-9a-z]+) -> ([a-z]+)$/,
    NOT: /^NOT ([0-9a-z]+) -> ([a-z]+)$/,
    LSHIFT: /^([a-z]+) LSHIFT ([0-9]+) -> ([a-z]+)$/,
    RSHIFT: /^([a-z]+) RSHIFT ([0-9]+) -> ([a-z]+)$/,
    TRANSITION: /^([a-z]+) -> ([a-z]+)$/,
    SIGNAL: /^([0-9]+) -> ([a-z]+)$/
  };

  function isNumber(str) {
    return !isNaN(Number(str));
  }

  function areWiresHaveSignal(wires) {
    return ![].slice.call(arguments, 1).find(item => {
      return isNumber(item) ? false : wires[item] === void 0;
    });
  }

  function applyInstruction(instruction, wires) {
    var match;
    var getWireSignalByMatchIndex = function (index) {
      return isNumber(match[index]) ? Number(match[index]) : wires[match[index]];
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

  function applyInstructions(instructions, wires) {
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
  }

  return applyInstructions(input.trim().split('\n'), wires || {});

};
