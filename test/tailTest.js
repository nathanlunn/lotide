const _ = require('../index');
const assert = require('chai').assert;


describe('tail', () => {
  it('should return [2, 3, 4] when passed [1, 2, 3, 4]', () => {
    assert.deepEqual(_.tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it('should return an empty array if passed an array with 1 element', () => {
    assert.deepEqual(_.tail([1]), []);
  });
});

