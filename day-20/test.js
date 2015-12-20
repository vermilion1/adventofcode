var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 20', () => {

  it('Task 1', () => {
    assert.equal(task1(10), 1);
    assert.equal(task1(30), 2);
    assert.equal(task1(40), 3);
    assert.equal(task1(70), 4);
    assert.equal(task1(60), 4);
    assert.equal(task1(120), 6);
    assert.equal(task1(80), 6);
    assert.equal(task1(150), 8);
    assert.equal(task1(130), 8);
  });

  it('Task 2', () => {
    assert.equal(task2(10), 1);
    assert.equal(task2(30), 2);
    assert.equal(task2(40), 3);
    assert.equal(task2(70), 4);
    assert.equal(task2(60), 4);
    assert.equal(task2(120), 6);
    assert.equal(task2(80), 6);
    assert.equal(task2(150), 8);
    assert.equal(task2(130), 6);
    assert.equal(task2(5000), 168);
    assert.equal(task2(7000), 240);
  });

});
