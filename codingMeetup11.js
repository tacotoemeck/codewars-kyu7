// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//     { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers(rounded to the nearest integer).In the example above your function should return 50(number).

//     Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.




// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher - order functions.In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex.Other approaches to solving the katas are of course possible.

// Here is the full list of the katas in the Coding Meetup series:

function getAverageAge(list) {
    return Math.round(list.reduce((prev, cur) => prev + cur.age, 0) / Object.keys(list).length);
}