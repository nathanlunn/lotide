const {assert} = require('chai');
const _ = require('../index');

describe('findKeyByValue', function() {
  it('should return the key in an object that equals the passed value', function() {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});