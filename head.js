const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

function head(array) {
  return array[0];
};

assertEqual(head([1,2,3]), 1);
assertEqual(head(['this', 'that', 'the other thing']), 'this');