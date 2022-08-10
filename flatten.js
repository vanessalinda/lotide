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
const flatten = (arr) => {
  const newArr = [];
  arr.forEach((el) => {
    Array.isArray(el) ? el.forEach((num) => newArr.push(num)) : newArr.push(el);
  });
  return newArr;
};

//Test code
console.log(flatten([1, 2, [3, 4], 5, [6]]));

const flatArray = [1, 2, [3, 4], 5, [6]];
flatten(flatArray); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(flatArray, [1, 2, [3, 4], 5, [6]]);
