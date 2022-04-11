const without = function(original, deletions) {
  let result = [];
  for (let el of original) {
    if (!deletions.includes(el)) {
      result.push(el);
    }
  }
  return result;
};

module.exports = without;