const eqArrays = (arr1, arr2) => {
  const str1 = arr1
    .map((el) => (typeof el === "string" ? `S${el}` : `N${el}`))
    .join("");
  const str2 = arr2
    .map((el) => (typeof el === "string" ? `S${el}` : `N${el}`))
    .join("");
  return str1 === str2;
};

const eqObjects = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  eqObjects(actual, expected)
    ? console.log(
        `✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);
