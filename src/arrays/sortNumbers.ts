/**
* Orders numbers in an array in ascending or descending order.
* @param {Array} arr Given array of numbers to be sorted.
* @param {boolean} descending An optional parameter to specifiy direction of sorting.
* @returns {Array} Returns an array of sorted numbers.
* @example 
* sortNumbers([3,1,2,5,4])
* output:  [ 1, 2, 3, 4, 5 ]
* sortNumbers([3,1,2,5,4],true)
* output: [ 5, 4, 3, 2, 1 ]
*/

export const sortNumbers = (arr:number[], descending:boolean = false): number[] => {
    const sorted = [...arr].sort((a,b) => a - b)
    return descending ? [...sorted].reverse() : sorted  
}