var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 3', () => {

  it('Task 1', () => {
    assert.equal(task1('>'), 2);
    assert.equal(task1('^>v<'), 4);
    assert.equal(task1('^v^v^v^v^v'), 2);
  });

  it('Task 2', () => {
    assert.equal(task2('^v'), 3);
    assert.equal(task2('^>v<'), 3);
    assert.equal(task2('^v^v^v^v^v'), 11);
  });

});
