var fs = require('fs');
var path = require('path');
var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 17', () => {

  it('Task 1', () => {
    assert.equal(task1.getContainers(25, [20, 15, 10, 5, 5]).length, 4);
  });

  it('Task 2', () => {
    assert.equal(task2.getMinimumContainers(25, [20, 15, 10, 5, 5]).length, 2);
  });

});
