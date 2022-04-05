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

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
