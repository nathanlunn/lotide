const assertArrayEqual = require('./assertArraysEqual');


const middle = function(array) {
  let result = [];
  if (array.length < 3) {
    return result;
  }
  if (array.length % 2 === 0) {
    result.push(array[array.length / 2 - 1], array[array.length / 2]);
    return result;
  }
    result.push(array[Math.floor(array.length / 2)]);
    return result;
};

assertArrayEqual(middle([1,5,6,7,8,8]), [6,7]);