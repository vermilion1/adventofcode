'use strict';

var max = require('../utils/max');

module.exports = (input) => {

  var RE = /Sue (\d+): (.*)/;
  var INFO = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1
  };

  var getThatAunt = (aunts) => {
    var info = aunts.map(getAuntInfo);
    var maxMatch = max(info.map(aunt => aunt.matched));
    var filtered = info.filter(aunt => aunt.matched === maxMatch);
    var thatAunt = filtered[0];

    for (var i = 1; i < filtered.length; i++) {
      if (thatAunt.notMatched > filtered[i].notMatched) {
        thatAunt = filtered[i];
      }
    }

    return thatAunt.aunt;
  };

  var getAuntInfo = (aunt) => {
    var match = aunt.match(RE);
    var number = +match[1];
    var matched = 0;
    var notMatched = 0;
    var things = match[2].split(', ');

    for (var i = 0; i < things.length; i++) {
      var split = things[i].split(': ');
      if (INFO[split[0]] === +split[1]) {
        matched++;
      }
      else {
        notMatched++;
      }
    }

    return {
      aunt: number,
      matched: matched,
      notMatched: notMatched
    }
  };

  return getThatAunt(input.trim().split('\n'));

}; 
