/*
	Property Acces
*/

// Data
let person = {};

     //Property
person.name = 'Jane Doe';

/*
 Same as 
 let person = {
	name:'Jane Doe'
 };
*/

console.log(person.name) // Jane Doe

let p = person.name

console.log(p) // Jane Doe

person.name = 'Jhon Doe'

console.log(p) // Jane Doe 'cause the primitive value is passed by value, non primitive values are passed by reference.

// Recommendation copy non-primitive values before using it or passing it to a function

console.log(p.age) // undefined

