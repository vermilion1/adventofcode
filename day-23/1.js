'use strict';

var is = require('../utils/is');

var COMMAND_RE = /(hlf|tpl|inc|jmp|jie|jio) ([a-z]+|[+-]\d+)(, ([+-]\d+))?/;
var Commands = {
  HALF: 'hlf',
  TRIPLE: 'tpl',
  INCREMENT: 'inc',
  JUMP: 'jmp',
  JUMP_IF_EVEN: 'jie',
  JUMP_IF_ONE: 'jio'
};

var parseInstructions = (input) => {
  return input.trim().split('\n').map(parseInstruction).filter(is.object);
};

var parseInstruction = (line) => {
  var matched = line.match(COMMAND_RE);
  if (matched) {
    var command = matched[1];
    var instruction = {command: command};

    switch (command) {
      case Commands.HALF:
      case Commands.TRIPLE:
      case Commands.INCREMENT:
        instruction.args = [matched[2]];
        break;

      case Commands.JUMP:
        instruction.args = [eval(matched[2])];
        break;

      case Commands.JUMP_IF_EVEN:
      case Commands.JUMP_IF_ONE:
        instruction.args = [matched[2], eval(matched[4])];
        break;

      default:
        return null;
    }

    return instruction;
  }
};

var exec = (instructions, cursor, registers) => {
  var instruction = instructions[cursor];
  if (instruction == null) {
    return registers;
  }

  var args = instruction.args;

  switch (instruction.command) {
    case Commands.HALF:
      registers[args[0]] /= 2;
      cursor += 1;
      break;

    case Commands.TRIPLE:
      registers[args[0]] *= 3;
      cursor += 1;
      break;

    case Commands.INCREMENT:
      registers[args[0]] += 1;
      cursor += 1;
      break;

    case Commands.JUMP:
      cursor += args[0];
      break;

    case Commands.JUMP_IF_EVEN:
      cursor += registers[args[0]] % 2 === 0 ? args[1] : 1;
      break;

    case Commands.JUMP_IF_ONE:
      cursor += registers[args[0]] === 1 ? args[1] : 1;
      break;

    default:
      return registers;
  }

  return exec(instructions, cursor, registers);
};

var run = (input, registers) => {
  return exec(parseInstructions(input), 0, registers || { a: 0, b: 0 });
};

module.exports = (input) => run(input).b;
module.exports.run = run;
