// https://developer.mozilla.org/es/docs/Glossary/Hoisting

/*
  Because function and variables declarations are assigned in memory
  at compilation time we can do the following.
  At compilation time function and variable declaration it's hoists to the top of his scope
*/

name('John')
function name(name){ console.log(name) }

// Another example

var x = 5;

(function () {
    console.log("x:", x); // we get 'undefined' instead of '5'
    var x = 10;
    console.log("x:", x); // 10
}());

// this works implicitilly as:

(function(){
  var x
  console.log("x:", x) // undefined
  x = 10
  console.log("x:", x) // 10
})()


// Other example

var x = 1
console.log(x, y) // 1 undefined
var y = 2 // it acts on the declaration but not in the initialization

// ->

var x = 1
var y
console.log(x, y) // 1 undefined
y = 2

/*
  Variables declarations are processed before runtime, declare a variable
  at any point of the code it's the same that do it at the beggining
*/

student; // ??
teacher; // ??

var student = 'you'
var teacher = 'Kyle'

// ---------------------

var student
var teacher

student; // undefined
teacher; // undefined

var student = 'you'
var teacher = 'Kyle'

/*
  hoisting is a convention to describe parsing without enter in great details
*/

// var hoisting

person = 'Kyle' // weird
var person

// function hoisting
getPerson()

function getPerson(){
  return person
}

// put executable code at the top and function at the bottom increases readibility
