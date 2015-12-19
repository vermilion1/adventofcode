'use strict';

var is = require('../utils/is');
var unique = require('../utils/unique');

module.exports = (input) => {

  var RE_REPLACEMENTS = /([a-zA-Z0-9]+) => ([a-zA-Z0-9]+)/;

  var parseReplacements = (lines) => {
    return lines.map(line => {
      var match = line.match(RE_REPLACEMENTS);
      if (match) {
        return {
          from: match[1],
          to: match[2]
        };
      }
    }).filter(is.object);
  };

  var generateMolecules = (molecule, replacements) => {
    var molecules = [];

    replacements.forEach(replacement => {
      var from = 0;
      var index;
      while ((index = molecule.indexOf(replacement.from, from)) !== -1) {
        var head = molecule.slice(0, index);
        var tail = molecule.slice(index + replacement.from.length);
        molecules.push(head + replacement.to + tail);
        from = index + replacement.from.length;
      }
    });

    return molecules;
  };

  var lines = input.trim().split('\n');
  var molecule = lines.pop();
  var replacements = parseReplacements(lines);
  var molecules = generateMolecules(molecule, replacements);

  return unique(molecules).length;

};
