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

const without = (arr1, arr2) => {
  const newArr = [];
  arr1.slice().forEach((el) => (!arr2.includes(el) ? newArr.push(el) : newArr));
  return newArr;
};

//Test code
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(
  without(
    ["cherries", "apples", "blueberries"],
    ["pineapple", "cherries", "bananas"]
  )
);

//Test assertions
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const nums = [2, 8, 3, 7, 5, 6];
without(nums, [3, 7]);
assertArraysEqual(nums, [2, 8, 3, 7, 5, 6]);

module.exports = without;
