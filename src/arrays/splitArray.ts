/**
* Creates from a given array,  chunks of arrays with n elements each.
* @param {Array} arr  Array to split.
* @param n Number of elements in each chunk of splitted array.
* @returns {Array} Returns chunks of arrays with n elements each.
*  Size of last array has size less than n but greater than 0.
* @example
* splitArray([1,2,3,4,5,6,7,8,9,10],3)
* output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
*/

export const splitArray = (arr:any[], n:number):any[] => 
[...Array(Math.ceil(arr.length/n))].map( (_,i) => arr.slice(i*n ,(i+1)*n))