// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well


// Array.flat solution ( not accepted by te)

"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat(1).sort((a,b)=> b-a)
}

flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])


/// nested loop ( only works on 2 dimensions)

function flattenAndSort(array) {
  // Good luck, brave code warrior!

  let flattened = [];

  for ( let i = 0; i < array.length; i++) {
  	for ( let j = 0; j < array[i].length; j++) {
  		flattened.push(array[i][j])
  	}
  }
  return flattened.sort((a,b) => a - b)
}

flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])

// 

function flattenAndSort(array) {
  // Good luck, brave code warrior!

return [].concat(...array).sort((a,b) => a - b)
}

flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])


