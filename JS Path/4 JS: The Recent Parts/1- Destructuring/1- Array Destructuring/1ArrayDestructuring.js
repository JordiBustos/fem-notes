function data() {
  return [1, 2, 3];
};

// OLD WAY
var tmp =  data();

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];
var fourth = tmp[3]; // undefined
var fifth = tmp[4] !== undefined ? tmp[1] : 0;

// With destructuring

var [
  first,
  second,
  third,
  fourth, // undefined
  fifth = 0 // if undefined -> default 0
]  = data();

// ------------------------------------
function largeData() {
  return [1,2, 3, 4, 5];
}

// OLD WAY
var tmp = largeData();
var one, two;

// assignement after declaration
one = tmp[0]
two = tmp.slice(1);

// Destructuring
// same here

var one, two;
// it's about assignement not about declaration of variables
[
  one,
  ...two
] = largeData();

// if there is nothing in the position when slice or ... starts both returns []

/*
  To conserv the variable tmp with destructuring if we need or want all the returned data
*/

var tmp;
var [
  first,
  two,
  third
] = tmp = data();

/*
  Other way
*/
var tmp = data();
var o = {}; // same with []

o.first = tmp[0];
o.second = tmp[1];
o.third = tmp[2];

// -------------------
var o = {};
var tmp = [
  o.first,
  o.second,
  o.third
] = data();

// tmp = [1, 2, 3] for how assignement works
