/**
* Creates a cartesian product, from an array of the form [Array, Array].
* @param {Array} arr  An array of the form [Array, Array].
* @returns {Array} Pairs of values from each elements in the returned Array.
* @example
* cartesian([['a','b'],[1,2]])
* output: [ [ 'a', 1 ], [ 'a', 2 ], [ 'b', 1 ], [ 'b', 2 ] ]
*/

export const cartesian = (arr:any[][]):any[] => arr.reduce(
    (a, b) => a.flatMap(x => b.map(y => [...x, y])), [[]]
);
