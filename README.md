# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @vanessalinda/lotide`

**Require it:**

`const _ = require('@vanessalinda/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head()`: retrieves the first item in the array.
- `tail()`: retrieves every element except the head (first element) of the array.
- `assertEqual()`: compares the two values it takes in and print out a message telling us if they match or not.
- `eqArrays()`: takes in two arrays and returns true or false, based on a perfect match.
- `assertArraysEqual()`: take in two arrays and console.log an appropriate message to the console.
- `without()`: returns a subset of a given array, removing unwanted elements.
- `flatten()`: takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- `middle()`: takes in an array and return the middle-most element(s) of the given array.
- `countOnly()`: takes in a collection of items and return counts for a specific subset of those items.
- `countLetters()`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `letterPositions()`: returns all the indices (zero-based positions) in the string where each character is found.
- `findKeyByValue()`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
- `eqObjects()`: take in two objects and returns true or false, based on a perfect match.
- `assertObjectsEqual()`: takes in two objects and console.log an appropriate message to the console.
- `map()`: creates a new array populated with the results of calling a provided function on every element in the calling array.
- `takeUntil()`: returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
- `findKey()`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
