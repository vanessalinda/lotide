const assert = require("chai").assert;
const middle = require("../middle");
//const assertArraysEqual = require("../assertArraysEqual");

describe("#middle", () => {
  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [1] for [1]", () => {
    assert.deepEqual(middle([1]), [1]);
  });
});

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //
// assertArraysEqual(
//   middle(["cherries", "apples", "bananas", "pears", "grapefruit", "oranges"]),
//   ["bananas", "pears"]
// );
// assertArraysEqual(
//   middle([
//     [5, "cherries"],
//     [3, "apples"],
//     [10, "bananas"],
//     [2, "pears"],
//     [6, "grapefruit"],
//   ]),
//   [[10, "bananas"]]
// );
// assertArraysEqual(
//   middle([
//     [5, "cherries"],
//     [3, "apples"],
//     [10, "bananas"],
//     [2, "pears"],
//     [6, "grapefruit"],
//   ]),
//   [
//     [10, "bananas"],
//     [2, "pears"],
//   ]
// );
