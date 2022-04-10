const assertEqual = require('./assertEqual');

function head(array) {
  return array[0];
};

assertEqual(head([1,2,3]), 1);
assertEqual(head(['this', 'that', 'the other thing']), 'this');