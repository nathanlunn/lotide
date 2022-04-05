const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays  = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};


const middle = function(array) {
  let result = [];
  if (array.length < 3) {
    return result;
  } else if (array.length % 2 === 0) {
    result.push(array[array.length / 2 - 1], array[array.length / 2]);
    return result;
  } else {
    result.push(array[Math.floor(array.length / 2)]);
    return result;
  }
};

assertArrayEqual(middle([1, 2, 3, 5, 2, 6, 7, 5, 6, 7]), [2, 6]);