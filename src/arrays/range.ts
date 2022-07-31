/**
* Creates an array of numbers between low and high in steps of step.
* @param {number} low Lowest number in array: Should be less than high.
* @param {number} high Highest number in array: Should be greater than low.
* @param {number} step Increment steps (spaces) between all elements in array. 
* @returns {Array} Returns an array of numbers ranging from low to high in steps of step.
* @example
* range(-10,10,5)
* output: [ -10, -5, 0, 5, 10 ]
* For inexact floating point values, call a map method to transform inexact values 
* range(-0.5,0,0.1)
* output: [ -0.5, -0.4, -0.3, -0.19999999999999996, -0.09999999999999998, 0 ]
* range(-0.5,0,0.1).map(i => Number(i.toFixed(2)))
* output: [ -0.5, -0.4, -0.3, -0.2, -0.1, 0 ]
*/

export const range = (low:number, high:number,step:number): number[] =>
[...Array(Math.floor((high - low)/step + 1))].map((_, i) => i*step + low)
