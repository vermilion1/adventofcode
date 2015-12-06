var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 5', () => {

  it('Task 1', () => {
    assert.equal(task1('ugknbfddgicrmopn'), true);
    assert.equal(task1('aaa'), true);
    assert.equal(task1('jchzalrnumimnmhp'), false);
    assert.equal(task1('haegwjzuvuyypxyu'), false);
    assert.equal(task1('dvszwmarrgswjxmb'), false);
  });

  it('Task 2', () => {
    assert.equal(task2('qjhvhtzxzqqjkmpb'), true);
    assert.equal(task2('xxyxx'), true);
    assert.equal(task2('uurcxstgmygtbstg'), false);
    assert.equal(task2('ieodomkazucvgmuy'), false);
  });

});
