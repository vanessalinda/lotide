const findKey = (obj, callback) => {
  let truthy;
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (callback(obj[key])) {
      truthy = key;
      return truthy;
    }
  }
};

//Test assertion
const assertEqual = (actual, expected) => {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//Test cases
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);

const fruitCount = {
  cherries: { boxes: 2 },
  apples: { boxes: 3 },
  pears: { boxes: 5 },
  bananas: { boxes: 2 },
};

assertEqual(
  findKey(fruitCount, (x) => x.boxes === 5),
  "pears"
);

const names = {
  Vanessa: { lastName: "Power" },
  Sonia: { lastName: "Chang" },
  Samantha: { lastName: "Power" },
  Sophie: { lastName: "Carter" },
  Andre: { lastName: "Marziali" },
};
assertEqual(
  findKey(names, (x) => x.lastName === "Carter"),
  "Sophie"
);
