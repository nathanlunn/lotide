const middle = require('../middle');
const assert = require('chai').assert;

describe('middle', () => {
  it('should return [3] when passed [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return [3, 4] when passed [5, 7, 3, 4, 9, 10]', () => {
    assert.deepEqual(middle([5, 7, 3, 4, 9, 10]), [3, 4]);
  });
  
  it('should return an empty array when passed [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});