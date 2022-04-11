const eqArrays = require('../eqArray');
const assert = require('chai').assert;

describe('eqArrays', () => {
  it('should return true when passed [1, 2, 3] and [1, 2, 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('should return false when passed [1, 2, 3] and [1, 3, 5]', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 3, 5]), false);
  });
});