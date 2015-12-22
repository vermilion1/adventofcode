var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 21', () => {

  it('Task 1', () => {
    assert.equal(task1.fight([8, 5, 5], [12, 7, 2]), true);
    assert.equal(task1.getMinimumGoldToWin([12, 7, 2]), 8);
  });

  it.skip('Task 2');

});
