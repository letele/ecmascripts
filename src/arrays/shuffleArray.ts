/**
* Shuffles an array; randomly positions elements in an array.
* @param {Array} arr Array to be shuffled.
* @returns {Array} Returns a shuffled array from that given array.
* @example
* shuffleArray(['J','o','h','n', 'D', 'o', 'e'])
* output: ['h', 'o', 'e','J', 'D', 'o','n']
*/

export const shuffleArray = (arr:any[]):any[] => {
    // generate a random number
    const i = Math.floor(Math.random()*arr.length);
    //use number as index to randomly select element from array
    return arr.length === 1 ?
    arr : [arr[i], ...shuffleArray(arr.filter((_,j) => j !== i))];
};
