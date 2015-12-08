var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 7', () => {

  var data = (`123 -> a
               456 -> b
               a AND b -> d
               a OR b -> e
               a LSHIFT 2 -> f
               b RSHIFT 2 -> g
               NOT a -> h
               NOT b -> i`).split('\n').map(line => line.trimLeft()).join('\n');

  it('Task 1', () => {
    assert.equal(task1(data), 123);
    assert.equal(task1.getSignals(data).d, 72);
    assert.equal(task1.getSignals(data).e, 507);
    assert.equal(task1.getSignals(data).f, 492);
    assert.equal(task1.getSignals(data).g, 114);
    assert.equal(task1.getSignals(data).h, 65412);
    assert.equal(task1.getSignals(data).i, 65079);
    assert.equal(task1.getSignals(data).a, 123);
    assert.equal(task1.getSignals(data).b, 456);
  });

  it('Task 2', () => {
    assert.equal(task2(data), 123);
    assert.equal(task2.getSignals(data).d, 123);
    assert.equal(task2.getSignals(data).e, 123);
    assert.equal(task2.getSignals(data).f, 492);
    assert.equal(task2.getSignals(data).g, 30);
    assert.equal(task2.getSignals(data).h, 65412);
    assert.equal(task2.getSignals(data).i, 65412);
    assert.equal(task2.getSignals(data).a, 123);
    assert.equal(task2.getSignals(data).b, 123);
  });

});
