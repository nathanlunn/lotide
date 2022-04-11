const middle = require('../middle');
const eqArrays = require('../eqArray');
const assert = require('chai').assert;

describe('middle', () => {
  it('should return [3] when passed [1, 2, 3, 4, 5]', () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
  });

  it('should return [3, 4] when passed [5, 7, 3, 4, 9, 10]', () => {
    assert.strictEqual(eqArrays(middle([5, 7, 3, 4, 9, 10]), [3, 4]), true);
  });
  
  it('should return an empty array when passed [1, 2]', () => {
    assert.strictEqual(eqArrays(middle([1, 2]), []), true);
  });
});