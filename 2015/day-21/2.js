'use strict';

var max = require('../utils/max');

var STATS_RE = /Hit Points: (\d+) Damage: (\d+) Armor: (\d+)/;
var HIT = 100;

//   [0]        [1]      [2]     [3]
//  name ----- cost - damage - armor
var WEAPONS = [
  ['Dagger',      8,       4,     0],
  ['Shortsword', 10,       5,     0],
  ['Warhammer',  25,       6,     0],
  ['Longsword',  40,       7,     0],
  ['Greataxe',   74,       8,     0]
];

//   [0]        [1]      [2]     [3]
//  name ----- cost - damage - armor
var ARMOR = [
  ['Empty',        0,       0,     0], // empty slot
  ['Leather',     13,       0,     1],
  ['Chainmail',   31,       0,     2],
  ['Splintmail',  53,       0,     3],
  ['Bandedmail',  75,       0,     4],
  ['Platemail',  102,       0,     5]
];

//   [0]        [1]      [2]     [3]
//  name ----- cost - damage - armor
var RINGS = [
  ['Empty',        0,       0,     0], // empty slot
  ['Empty',        0,       0,     0], // empty slot
  ['Damage +1',   25,       1,     0],
  ['Damage +2',   50,       2,     0],
  ['Damage +3',  100,       3,     0],
  ['Defense +1',  20,       0,     1],
  ['Defense +2',  40,       0,     2],
  ['Defense +3',  80,       0,     3]
];

var createEnemy = (input) => {
  return input.trim().split('\n').join(' ').match(STATS_RE).slice(1, 4).map(Number);
};

var createPlayer = (equipment) => {
  return equipment.reduce((prev, current) => [prev[0], prev[1] + current[2], prev[2] + current[3]], [HIT, 0, 0]);
};

var fight = (player, enemy) => {
  player = player.slice();
  enemy = enemy.slice();

  var round = 1;
  while (player[0] > 0 && enemy[0] > 0) {
    var attack = round % 2 ? player : enemy;
    var defence = round % 2 ? enemy : player;
    defence[0] -= Math.max(attack[1] - defence[2], 1);
    round += 1;
  }

  return player[0] > 0;
};

var getMaximumGoldToLose = (enemy) => {
  var results = [];

  for (var weapon = 0; weapon < WEAPONS.length; weapon++) {
    for (var armor = 0; armor < ARMOR.length; armor++) {
      for (var ring1 = 0; ring1 < RINGS.length; ring1++) {
        for (var ring2 = 0; ring2 < RINGS.length; ring2++) {
          if (ring1 === ring2 && ring1 > 1) {
            continue;
          }
          var equipment = [WEAPONS[weapon], ARMOR[armor], RINGS[ring1], RINGS[ring2]];
          if (fight(createPlayer(equipment), enemy) === false) {
            results.push(equipment.reduce((prev, current) => prev + current[1], 0));
          }
        }
      }
    }
  }

  return max(results);
};

module.exports = (input) => getMaximumGoldToLose(createEnemy(input));
