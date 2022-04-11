# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nathanlunn/lotide`

**Require it:**

`const _ = require('@nathanlunn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: console.logs a passed message if actual and expected are equal, and a failed message if not
* `eqArrays(array1, array2)`: returns true if two passed arrays are equal, returns false if not
* `assertArraysEqual(actual, expected)`: passes the two passed arrays into eqArrays, and if true is returned, console.logs a passed message, if false, passes a failed message
* `eqObjects(object1, object2)`: returns true if two passed objects are equal, returns false if not
* `assertObjectsEqual(actual, expected)`: passes the two passed objects into eqObjects, and if true is returned, console.logs a passed message, if false, passes a failed message
* `head(array)`: returns the first element in a given array
* `tail(array)`: returns all but the first element in a given array
* `middle(array)`: returns the element(s) that are in the middle of a given array 
* `countLetters(string)`: returns an object with keys of letters with values of their count in a given string
* `countOnly(allItems, itemsToCount)`: returns an object with keys of elements asked to be counted by a given object, and the count of how many times those elements occur within a given array as their values
* `findKey(object, clallback)`: returns first key of a given value that matches a given function's value search criteria
* `findKeyByValue(object, value)`:  returns key of given object if it's value is equal to a given value
* `flatten(array)`: returns a non-nested array version of a given nested array
* `letterPositions(sentence)`: returns an object with keys of letters with values of an array containing each index of a given string that letter can be found at
* `map(array, callback)`: returns an array of the return values of each element of a given array being passed into a  given callback function 
* `takeUntil(array, callback)`: returns an array of each element of a given array until and element has met a stopping criteria given by the given callback method
* `without(original, deletions)`: returns an array of elements of a given array, excluding any included in a given, deletions, array 
