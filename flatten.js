const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let result = [];
  for (let el of array) {
    if (Array.isArray(el)) {
      result = result.concat(el);
    } else {
      result.push(el);
    }
  }
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
