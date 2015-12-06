var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 2', () => {

  it('Task 1', () => {
    assert.equal(task1('2x3x4'), 58);
    assert.equal(task1('1x1x10'), 43);
  });

  it('Task 2', () => {
    assert.equal(task2('2x3x4'), 34);
    assert.equal(task2('1x1x10'), 14);
  });

});
