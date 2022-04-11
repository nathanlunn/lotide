const {assert} = require('chai');
const _ = require('../index');

describe('countOnly', function() {
  it('should return the correct could given counting criteria', function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const criteria = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    assert.deepEqual(_.countOnly(firstNames, criteria), {Jason: 1, Fang: 2});
  });
});