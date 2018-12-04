var fs = require('fs');
var path = require('path');
var assert = require('assert');
var task1 = require('./1');
var task2 = require('./2');

describe('Day 11', () => {

  it('Task 1', () => {
    assert.equal(task1('abcdefgh'), 'abcdffaa');
    assert.equal(task1('ghijklmn'), 'ghjaaabb');
  });

  it('Task 2', () => {
    assert.equal(task2('abcdefgh'), 'abcdffbb');
    assert.equal(task2('ghijklmn'), 'ghjaaacc');
  });

  }); 
