const assertArrayEqual = require('./assertArraysEqual');

const without = function(original, deletions) {
  let result = [];
  for (let el of original) {
    if (!deletions.includes(el)) {
      result.push(el);
    }
  }
  return result;
};

assertArrayEqual(without("hello", "o"), ["h", "e", "l", "l"])