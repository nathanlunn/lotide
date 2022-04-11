const {assert} = require('chai');
const _ = require('../index');

describe('flatten', function() {
  it('return [1, 2, 3, 4, 5] when passed [1, [2, 3], 4, 5]', function() {
    assert.deepEqual(_.flatten([1, [2, 3], 4, 5]), [1, 2, 3, 4, 5]);
  });
});