# ecmascripts

## A collection of ES6 array modules.

### Array modules

<details>
<summary>cartesian</summary>

```js
// Creates a cartesian product, from an array of the form [Array, Array].
import {cartesian} from "@letele/ecmascripts"

cartesian([['a','b'],[1,2]])
// output: [ [ 'a', 1 ], [ 'a', 2 ], [ 'b', 1 ], [ 'b', 2 ] ]
```
</details>

<details>
<summary>keyArray</summary>

```js
// From a given key of an Object, it returns a collection of values of the given key.
import {keyArray} from "@letele/ecmascripts"

const candidates = [
    {name:'John', surname:'Doe'},{name:'Jane', surname:'Smith'},
    {name:'Foo', surname:'Bar'},{name:'Hello', surname:'World'}
]
keyArray(candidates,'name')
// output: [ 'John', 'Jane', 'Foo', 'Hello' ]
```
</details>

<details>
<summary>randomElement</summary>

```js
// Returns a randomly selected element from a given array.
import {randomElement} from "@letele/ecmascripts"

randomElement([1,undefined,'er',false])
// output: false
```
</details>

<details>
<summary>randomElements</summary>

```js
// Creates an array of randomly selected elements from a given array.
import {randomElements} from "@letele/ecmascripts"

randomElements([12,true,'a',2,3,'string'],4)
// output: [ 12, 'string', true, 2 ]
```
</details>

<details>
<summary>range</summary>

```js
// Creates an array of numbers between low and high in steps of step.
import {range} from "@letele/ecmascripts"

range(-10,10,5)
// output: [ -10, -5, 0, 5, 10 ]

// For inexact floating point values, call a map method to transform inexact values.
range(-0.5,0,0.1)
// output: [ -0.5, -0.4, -0.3, -0.19999999999999996, -0.09999999999999998, 0 ]
range(-0.5,0,0.1).map(i => Number(i.toFixed(2)))
// output: [ -0.5, -0.4, -0.3, -0.2, -0.1, 0 ]
```
</details>

<details>
<summary>shuffleArray</summary>

```js
// Shuffles an array: randomly positions elements in an array.
import {shuffleArray} from "@letele/ecmascripts"

shuffleArray(['J','o','h','n', 'D', 'o', 'e'])
// output: ['h', 'o', 'e','J', 'D', 'o','n']
```
</details>

<details>
<summary>sortNumbers</summary>

```js
// Orders numbers in an array in ascending or descending order.
import {sortNumbers} from "@letele/ecmascripts"

sortNumbers([3,1,2,5,4])
// output: [ 1, 2, 3, 4, 5 ]
sortNumbers([3,1,2,5,4],true)
// output: [ 5, 4, 3, 2, 1 ]
```
</details>

<details>
<summary>sortStrings</summary>

```js
// Orders strings in an array in ascending or descending order.
import {sortStrings} from "@letele/ecmascripts"

sortStrings(['b','c','a','Y','Z','X'])
// output: [ 'X', 'Y', 'Z', 'a', 'b', 'c' ]

// Note that sort does a case-sensitive comparison.
// Meaning capital letters take precedence over small letters. 
// Call a map method from output then a sort method for desired result. 
sortStrings(['b','c','a','Y','Z','X'].map(i => i.toUpperCase()))
// output: [ 'A', 'B', 'C', 'X', 'Y', 'Z' ]
sortStrings(['b','c','a','Y','Z','X'].map(i => i.toLowerCase()))
// output: [ 'a', 'b', 'c', 'x', 'y', 'z' ]
sortStrings(['b','c','a','Y','Z','X'].map(i => i.toLowerCase()),true)
// output: [ 'z', 'y', 'x', 'c', 'b', 'a' ]
```
</details>

<details>
<summary>splitArray</summary>

```js
// Creates from a given array,  chunks of arrays with n elements each.
// Size of last array has size less than n but greater than 0.
import {splitArray} from "@letele/ecmascripts"

splitArray([1,2,3,4,5,6,7,8,9,10],3)
// output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
```
</details>

<details>
<summary>sumNumbers</summary>

```js
// Sums up numbers in an array and returns their sum.
import {sumNumbers} from "@letele/ecmascripts"

sumNumbers([0,0,1,0,1,1,0])
// output: 3
```
</details>