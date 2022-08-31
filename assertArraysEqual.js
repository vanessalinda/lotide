const eqArrays = require("./eqArrays");

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2)
    ? console.log("The arrays are equal!")
    : console.log("The arrays are different.");
};

module.exports = assertArraysEqual;
