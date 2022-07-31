/**
* Orders strings in an array in ascending or descending order.
* @param {Array} arr Array containing strings to sort.
* @param {boolean} descending An optional parameter to specifiy direction of sorting.
* @returns {Array} Returns an array of sorted strings.
* @example
* sortStrings(['b','c','a','Y','Z','X'])
* output: [ 'X', 'Y', 'Z', 'a', 'b', 'c' ]
* //Note that sort does a case-sensitive comparison.
* //Meaning capital letters take precedence over small letters. 
* // Attach a map method then a sort for desired result.
* sortStrings(['b','c','a','Y','Z','X'].map(i => i.toUpperCase()))
* output: [ 'A', 'B', 'C', 'X', 'Y', 'Z' ]
* sortStrings(['b','c','a','Y','Z','X'].map(i => i.toLowerCase()))
* output: [ 'a', 'b', 'c', 'x', 'y', 'z' ]
* sortStrings(['b','c','a','Y','Z','X'].map(i => i.toLowerCase()),true)
* output: [ 'z', 'y', 'x', 'c', 'b', 'a' ]
*/

export const sortStrings = (arr:string[], descending:boolean = false): string[] => {
    const sorted = [...arr].sort()
    return descending ? [...sorted].reverse() : sorted  
}
