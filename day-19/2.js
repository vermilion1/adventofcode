'use strict';

var is = require('../utils/is');
var unique = require('../utils/unique');

module.exports = (input) => {

  var RE_REPLACEMENTS = /([a-zA-Z0-9]+) => ([a-zA-Z0-9]+)/;
  var ELECTRON = 'e';

  var parseReplacements = (lines) => {
    return lines.map(line => {
      var match = line.match(RE_REPLACEMENTS);
      if (match) {
        return {
          from: match[2],
          to: match[1]
        };
      }
    }).filter(is.object);
  };

  var getStepsTo = (molecule, replacements, electron) => {
    var steps = 0;
    while (molecule !== electron) {
      replacements.forEach(replacement => {
        var from = replacement.from;
        var to = replacement.to;
        if (molecule.indexOf(from) !== -1) {
          molecule = molecule.replace(from, to);
          steps += 1;
        }
      });
    }
    return steps;
  };

  var lines = input.trim().split('\n');
  var molecule = lines.pop();
  var replacements = parseReplacements(lines);

  return getStepsTo(molecule, replacements, ELECTRON);

};
