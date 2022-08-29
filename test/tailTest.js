const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words), ["Lighthouse", "Labs"];
//Testing the original array is not mutated
assertEqual(words.length, 3);

const numbers = tail([1, 2, 3, 4, 5]);
assertEqual(numbers.length, 4);

const one = tail([1]);
assertEqual(one.length, 0);
