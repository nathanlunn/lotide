const {assert} = require('chai');
const _ = require('../index');

describe('countLetters', function() {
  it('should return {h: 1, e: 1, l: 2, o: 1} when passed "hello"', function() {
    assert.deepEqual(_.countLetters("hello"), {h: 1, e: 1, l: 2, o: 1});
  });
});