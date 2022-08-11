// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = (arr) => {
  const length = arr.length;
  if (length % 2 === 0)
    return arr.slice(Math.floor(length / 2 - 1), Math.floor(length / 2 + 1));
  return arr.slice(Math.floor(arr.length / 2), Math.floor(arr.length / 2 + 1));
};

// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //
assertArraysEqual(
  middle(["cherries", "apples", "bananas", "pears", "grapefruit", "oranges"]),
  ["bananas", "pears"]
);
assertArraysEqual(
  middle([
    [5, "cherries"],
    [3, "apples"],
    [10, "bananas"],
    [2, "pears"],
    [6, "grapefruit"],
  ]),
  [[10, "bananas"]]
);
assertArraysEqual(
  middle([
    [5, "cherries"],
    [3, "apples"],
    [10, "bananas"],
    [2, "pears"],
    [6, "grapefruit"],
  ]),
  [
    [10, "bananas"],
    [2, "pears"],
  ]
);
