var assert = require('assert');
var task1 = require('./1');

describe('Day 25', () => {

  it('Task 1', () => {
    assert.equal(task1.getCodeAt(1, 1), 20151125);
    assert.equal(task1.getCodeAt(1, 2), 18749137);
    assert.equal(task1.getCodeAt(1, 5), 10071777);
    assert.equal(task1.getCodeAt(3, 1), 16080970);
    assert.equal(task1.getCodeAt(3, 2), 8057251);
    assert.equal(task1.getCodeAt(3, 3), 1601130);
    assert.equal(task1.getCodeAt(3, 4), 7981243);
    assert.equal(task1.getCodeAt(4, 2), 32451966);
    assert.equal(task1.getCodeAt(4, 3), 21345942);
    assert.equal(task1.getCodeAt(4, 4), 9380097);
    assert.equal(task1.getCodeAt(4, 5), 10600672);
    assert.equal(task1.getCodeAt(4, 6), 31527494);
    assert.equal(task1.getCodeAt(6, 5), 1534922);
  });

});
