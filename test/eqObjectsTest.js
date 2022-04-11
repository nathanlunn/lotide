const {assert} = require('chai');
const _ = require('../index');

describe('eqObjects', function() {
  it('should return true when {a: 1, b: 2} and {a: 1, b: 2} are passed', function() {
    assert.equal(_.eqObjects({a: 1, b: 2}, {a: 1, b: 2}), true);
  });
});