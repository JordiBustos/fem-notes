/*
 Destructuring ES6 functionallity
	Simplified way of defining variables and taking them outside of an object or an array
*/


// Variable declarations:

//    TARGET ---------- SOURCE
const [first, second] = [true, false]

let [first, second] = [true, false]

var [first, second] = [true, false]

//------ ASSIGNMENT ------//
[first, second] = [true, false]

/*
 Replace of this notation
*/

let obj = {first: 'Jane', last:'Doe'}
let first = obj.first
let last = obj.last

// Example //

const [a, b, c] = [true, false]

console.log(c) // undefined

// 2 is omitted
let [a, , c] = [1, 2, 3]

// a = 1, b = [2, 3]
let [a, ...b] = [1, 2, 3]

// Swap variables
[a, b] = [b, a]


// FOR OBJECTS //

//    TARGET ---------- SOURCE
const {first, second} = {first: 0, second: 1}

// Order doesn't matter
{first, second} = {first: 2, second: 3}

// Destructuring more examples //
let obj = {
	name: 'Jane',
	lastName: 'Doe',
	age:25
}



// Deep arrays

let [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]]

/*
	a = 1, b = 2
	c = [ [3, 4 ], 5 ]
	d = 6
*/
