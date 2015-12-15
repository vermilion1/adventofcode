var fs = require('fs');
var path = require('path');
var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');
var input = String(fs.readFileSync(path.resolve(__dirname, 'test-input.txt')));

describe('Day 14', () => {

  it('Task 1', () => {
    assert.equal(task1.getBestDistance(input, 1000), 1120);
  });

  it('Task 2', () => {
    assert.equal(task2.getHighestScore(input, 1000), 689);
  });

});
