const eqArrays = (arr1, arr2) => {
  const str1 = arr1
    .map((el) => (typeof el === "string" ? `S${el}` : `N${el}`))
    .join("");
  const str2 = arr2
    .map((el) => (typeof el === "string" ? `S${el}` : `N${el}`))
    .join("");
  return str1 === str2;
};
const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2)
    ? console.log("The arrays are equal!")
    : console.log("The arrays are different.");
};

const letterPositions = (str) => {
  const sentence = str.split("");
  const result = sentence.reduce((acc, letter, index) => {
    if (letter !== " ") {
      acc[letter] = acc[letter] || [];
      acc[letter].push(index);
    }
    return acc;
  }, {});
  return result;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

module.exports = letterPositions;
