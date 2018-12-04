var fs = require('fs');
var path = require('path');
var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');
var input = String(fs.readFileSync(path.resolve(__dirname, 'test-input.txt')));

describe('Day 8', () => {

  it('Task 1', () => {
    assert.equal(task1(input.split('\n')[0]), 2);
    assert.equal(task1(input.split('\n')[1]), 2);
    assert.equal(task1(input.split('\n')[2]), 3);
    assert.equal(task1(input.split('\n')[3]), 5);
    assert.equal(task1(input), 12);
  });

  it('Task 2', () => {
    assert.equal(task2(input.split('\n')[0]), 4);
    assert.equal(task2(input.split('\n')[1]), 4);
    assert.equal(task2(input.split('\n')[2]), 6);
    assert.equal(task2(input.split('\n')[3]), 5);
    assert.equal(task2(input), 19);
  });

  }); 
