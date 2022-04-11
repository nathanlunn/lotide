const {assert} = require('chai');
const _ = require('../index');

describe ('map', function() {
  it ('should return [2, 4, 6] when [1, 2, 3] and x => x * 2 are passed', function() {
    assert.deepEqual(_.map([1, 2, 3], x => x * 2), [2, 4, 6]);
  });
});