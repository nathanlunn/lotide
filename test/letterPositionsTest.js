const {assert} = require('chai');
const _ = require('../index');

describe ('letterPositions', function() {
  it ('Should return an object of each letter in an string and an array of it\'s posititons', function() {
    assert.deepEqual(_.letterPositions("hello"), {h: [0], e: [1], l: [2, 3], o: [4]});
  });
});