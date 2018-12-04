var fs = require('fs');
var path = require('path');
var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 12', () => {

  it('Task 1', () => {
    assert.equal(task1('[1,2,3]'), 6);
    assert.equal(task1('{"a":2,"b":4}'), 6);
    assert.equal(task1('[[[3]]]'), 3);
    assert.equal(task1('{"a":{"b":4},"c":-1}'), 3);
    assert.equal(task1('{"a":[-1,1]}'), 0);
    assert.equal(task1('[-1,{"a":1}]'), 0);
    assert.equal(task1('[]'), 0);
    assert.equal(task1('{}'), 0);
  });

  it('Task 2', () => {
    assert.equal(task2('[1,2,3]'), 6);
    assert.equal(task2('{"a":2,"b":4}'), 6);
    assert.equal(task2('[1,{"c":"red","b":2},3]'), 4);
    assert.equal(task2('{"d":"red","e":[1,2,3,4],"f":5}'), 0);
    assert.equal(task2('[1,"red",5]'), 6);
  });

  }); 
