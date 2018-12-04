var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 6', () => {

  it('Task 1', () => {
    assert.equal(task1('turn on 0,0 through 999,999'), 1000000);
    assert.equal(task1('toggle 0,0 through 999,0'), 1000);
    assert.equal(task1('turn off 499,499 through 500,500'), 0);
  });

  it('Task 2', () => {
    assert.equal(task2('turn on 0,0 through 0,0'), 1);
    assert.equal(task2('toggle 0,0 through 999,999'), 2000000);
  });

});
