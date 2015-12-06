var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 1', () => {

  it('Task 1', () => {
    assert.equal(task1('(())'), 0);
    assert.equal(task1('()()'), 0);
    assert.equal(task1('((('), 3);
    assert.equal(task1('(()(()('), 3);
    assert.equal(task1('))((((('), 3);
    assert.equal(task1('())'), -1);
    assert.equal(task1('))('), -1);
    assert.equal(task1(')))'), -3);
    assert.equal(task1(')())())'), -3);
  });

  it('Task 2', () => {
    assert.equal(task2(')'), 1);
    assert.equal(task2('()())'), 5);
  });

});
