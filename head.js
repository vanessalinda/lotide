const assertEqual = (actual, expected) => {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const head = (array) => {
  return array.shift();
};

//TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
