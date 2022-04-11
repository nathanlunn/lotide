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

module.exports = flatten;
