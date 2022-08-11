const assertEqual = (actual, expected) => {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (str) => {
  const result = str
    .replaceAll(" ", "")
    .split("")
    .reduce((acc, letter) => {
      acc[letter] = acc[letter] || 0;
      acc[letter]++;
      return acc;
    }, {});
  return result;
};

//TEST ASSERTIONS
const hello = countLetters("hello");
assertEqual(hello["l"], 2);

const lighthouse = countLetters("lighthouse in the house");
assertEqual(lighthouse["h"], 4);
