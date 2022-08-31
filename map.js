const map = (array, callback) => {
  const results = [];
  for (let el of array) {
    results.push(callback(el));
  }
  return results;
};

//Test assertions
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

//Test cases
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const nums = [2, 10, 20, 40, 80, 160];
const results2 = map(nums, (num) => num * 5);
assertArraysEqual(results2, [10, 50, 100, 200, 400, 800]);

const pigLatin = ["lighthouse", "in", "the", "lab"];
const results3 = map(pigLatin, (word) => word.slice(1) + word[0] + "ay");
assertArraysEqual(results3, ["ighthouselay", "niay", "hetay", "ablay"]);

module.exports = map;
