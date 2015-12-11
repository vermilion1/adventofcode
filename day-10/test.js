var fs = require('fs');
var path = require('path');
var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 10', () => {

  it('Task 1', () => {
    assert.equal(task1.lookAndSay('1', 1), '11');
    assert.equal(task1.lookAndSay('11', 1), '21');
    assert.equal(task1.lookAndSay('21', 1), '1211');
    assert.equal(task1.lookAndSay('1211', 1), '111221');
    assert.equal(task1.lookAndSay('111221', 1), '312211');

    assert.equal(task1.getLookAndSayLength('1', 1), 2);
    assert.equal(task1.getLookAndSayLength('11', 1), 2);
    assert.equal(task1.getLookAndSayLength('21', 1), 4);
    assert.equal(task1.getLookAndSayLength('1211', 1), 6);
    assert.equal(task1.getLookAndSayLength('111221', 1), 6);

    assert.equal(task1.getLookAndSayLength('1', 2), 2);
    assert.equal(task1.getLookAndSayLength('1', 3), 4);
    assert.equal(task1.getLookAndSayLength('1', 4), 6);
    assert.equal(task1.getLookAndSayLength('1', 5), 6);

    assert.equal(task1('1'), 82350);
    assert.equal(task1('2'), 95798);
    assert.equal(task1('59'), 191596);
  });

  it('Task 2', () => {
    assert.equal(task2('1'), 1166642);
    assert.equal(task2('7'), 1355550);
  });

  }); 
