const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

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
