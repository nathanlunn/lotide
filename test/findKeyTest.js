const {assert} = require('chai');
const _ = require('../index');

describe('findKey', function() {
  it('should return "noma" when it is the first key with callback\'s search criteria', function() {
    const object = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
     "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.deepEqual(_.findKey(object, x => x.stars === 2), "noma");
  });
});