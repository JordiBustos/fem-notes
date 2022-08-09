function data() {
  return { a: 1, b: 2, c: 3, e: 5, f: 6, g: 7 }
}

// old way
var tmp = data() || {}; // if nothing is returned
var first, second;
first = tmp.a !== undefined ? tmp.a : 1;
second = tmp.b;
var third = tmp.c;
var fourth = tmp.d; // undefined

// with destructuring
// instead of using index position as source with objects we use the property name
// (position doesn't matter) source: target
var {
  a: first = 1,
  b: second,
  c: third,
  d: fourth // undefined
  ...fifth
} = data() || {}; // if nothing is returned



var one, two;
// the syntax is to differentiate it from {} block scope
({
  a: one,
  b: two
} = data());


// Iff source and target has same name
var tmpSame = data() || {};
var a = tmp.a
var b = tmp.b

var {
  a,
  b
} = data() || {};
