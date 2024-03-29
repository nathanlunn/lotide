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

module.exports = countLetters;