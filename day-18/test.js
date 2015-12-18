var fs = require('fs');
var path = require('path');
var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');
var input1 = String(fs.readFileSync(path.resolve(__dirname, 'test-input-1.txt')));
var input2 = String(fs.readFileSync(path.resolve(__dirname, 'test-input-2.txt')));

var DELIMITER = '~~~~~~';

describe('Day 18', () => {

  it('Task 1', () => {
    var maps = input1.split(DELIMITER);
    var map0 = task1.convertToMap(maps[0]);
    var map1 = task1.convertToMap(maps[1]);
    var map2 = task1.convertToMap(maps[2]);
    var map3 = task1.convertToMap(maps[3]);
    var map4 = task1.convertToMap(maps[4]);

    assert.equal(task1.countOn(map0), 15);
    assert.equal(task1.countOn(map1), 11);
    assert.equal(task1.countOn(map2), 8);
    assert.equal(task1.countOn(map3), 4);
    assert.equal(task1.countOn(map4), 4);

    assert.deepEqual(task1.animate(map0, 0), map0);
    assert.deepEqual(task1.animate(map0, 1), map1);
    assert.deepEqual(task1.animate(map0, 2), map2);
    assert.deepEqual(task1.animate(map0, 4), map4);
    assert.deepEqual(task1.animate(map1, 2), map3);
    assert.deepEqual(task1.animate(map2, 1), map3);
    assert.deepEqual(task1.animate(map2, 2), map4);
  });

  it('Task 2', () => {
    var maps = input2.split(DELIMITER);
    var map0 = task2.convertToMap(maps[0]);
    var map1 = task2.convertToMap(maps[1]);
    var map2 = task2.convertToMap(maps[2]);
    var map3 = task2.convertToMap(maps[3]);
    var map4 = task2.convertToMap(maps[4]);
    var map5 = task2.convertToMap(maps[5]);

    assert.equal(task2.countOn(map0), 17);
    assert.equal(task2.countOn(map1), 18);
    assert.equal(task2.countOn(map2), 18);
    assert.equal(task2.countOn(map3), 18);
    assert.equal(task2.countOn(map4), 14);
    assert.equal(task2.countOn(map5), 17);

    assert.deepEqual(task2.animate(map0, 0), map0);
    assert.deepEqual(task2.animate(map0, 1), map1);
    assert.deepEqual(task2.animate(map0, 2), map2);
    assert.deepEqual(task2.animate(map0, 4), map4);
    assert.deepEqual(task2.animate(map0, 5), map5);
    assert.deepEqual(task2.animate(map1, 2), map3);
    assert.deepEqual(task2.animate(map2, 1), map3);
    assert.deepEqual(task2.animate(map2, 2), map4);
    assert.deepEqual(task2.animate(map2, 3), map5);
  });

});
