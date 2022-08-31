const tail = require("../tail");
const assert = require("chai").assert;
//const assertEqual = require("../assertEqual")

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });

  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words), ["Lighthouse", "Labs"];
// //Testing the original array is not mutated
// assertEqual(words.length, 3);

// const numbers = tail([1, 2, 3, 4, 5]);
// assertEqual(numbers.length, 4);

// const one = tail([1]);
// assertEqual(one.length, 0);
