const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArray');
const tail = require('../tail');

const words = [1, 2, 3, 4];
assertEqual(tail(words).length, 3);
assertEqual(eqArrays(tail(words), [2, 3, 4]), true);