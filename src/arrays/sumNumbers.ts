/**
* Sums up numbers in an array and returns their sum.
* @param {Array} arr  An array of numbers.
* @returns {number} Returns the sum of numbers in the given array.
* @example
* sumNumbers([0,0,1,0,1,1,0])
* output: 3
*/

export const sumNumbers = (arr:number[]):number => 
arr.reduce((previous,current) => previous+current,0)