/**
* Creates an array of randomly selected elements from a given array.
* @param {Array} array Given Array to select elements from.
* @param {number} n Number of random elements to select. Should not exceed number of elements in array.
* @returns {Array} Returns an array of n random elements from a given array.
* @example
* randomElements([12,true,'a',2,3,'string'],4)
* output: [ 12, 'string', true, 2 ]
*/

export const randomElements = (array:any[], n:number):any[] => 
array.sort(() => .5 - Math.random()).slice(0, n)