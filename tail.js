const assertEqual = require('./assertEqual');

function tail(array) {
  return array.slice(1);
};

const words = [1, 2, 3, 4];
assertEqual(tail(words).length, 3);