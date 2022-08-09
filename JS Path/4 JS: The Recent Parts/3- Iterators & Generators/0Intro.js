/*
  It's only forward doesn't go backwards
*/

var str = 'Hello';
var world = ['W', 'o', 'r', 'l', 'd'];

var it1 = str[Symbol.iterator](); // str.Symbol.iterator "meta location"
var it2 = world[Symbol.iterator]();

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next()); // { value: 'o', done: false }
console.log(it1.next()); // { value: undefined, done:true }

console.log('--------');

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
