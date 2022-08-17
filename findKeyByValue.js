const findKeyByValue = (obj, show) => {
  let key;
  const objKeys = Object.keys(obj);
  objKeys.forEach((el) => (obj[el] === show ? (key = el) : key));
  return key;
};

//Test assertion
const assertEqual = (actual, expected) => {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//Test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const fruitCount = {
  cherries: 20,
  apples: 5,
  pears: 2,
};

assertEqual(findKeyByValue(fruitCount, 20), "cherries");
assertEqual(findKeyByValue(fruitCount, 2), "pears");
