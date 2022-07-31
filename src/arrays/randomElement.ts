/**
* Returns a randomly selected element from a given array.
* @param {Array} arr Given Array in which element is select from.
* @returns {*} Returns the randomly selected element.
* @example
* randomElement([1,undefined,'er',false])
* output: false
*/

export const randomElement = (arr:any[]):any => 
arr[Math.floor(Math.random()*arr.length)]