const middle = (arr) => {
  const length = arr.length;
  if (length % 2 === 0)
    return arr.slice(Math.floor(length / 2 - 1), Math.floor(length / 2 + 1));
  return arr.slice(Math.floor(arr.length / 2), Math.floor(arr.length / 2 + 1));
};

module.exports = middle;
