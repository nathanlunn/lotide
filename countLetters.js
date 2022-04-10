const assertObjectsEqual = require('./assertObjectsEqual');

const countLetters = function(string) {
  let result = {};

  for (let letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;
};

assertObjectsEqual(countLetters("this this thisr"), {t: 3, h: 3, i: 3, s: 3, r: 1});