const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", 3], ["1", "2", 3]), true);
assertEqual(eqArrays(["a", "b", 3, 7], ["a", "b", 3, 7]), true);
assertEqual(eqArrays(["a", "b", 3, "7"], ["a", "b", 3, 7]), false);
