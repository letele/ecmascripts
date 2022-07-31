/**
* Creates a collection of values of a given key in an object element.
* @param {Array} arr An array containing Objects with the same keys.
* @param {string} key Name of a particular key on object.
* @returns {Array} Returns an Array with values of the given key.
* @example
* const candidates = [
*     {name:'John', surname:'Doe'},{name:'Jane', surname:'Smith'},
*     {name:'Foo', surname:'Bar'},{name:'Hello', surname:'World'}
* ]
* keyArray(candidates, 'name')
* output: [ 'John', 'Jane', 'Foo', 'Hello' ]
*/

export const keyArray = (arr:any[],key:string):any[] =>
arr.map(object => object[key])