var fs = require('fs');
var path = require('path');
var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');
var input = String(fs.readFileSync(path.resolve(__dirname, 'test-input.txt')));

describe('Day 23', () => {

  it('Task 1', () => {
    assert.equal(task1.run(input).a, 2);
    assert.equal(task1.run(input, {a: 1}).a, 7);
    assert.equal(task1.run(input, {a: 50}).a, 154);
  });

  it.skip('Task 2');

});
