// everything are functions so we can count function applications (calls)

// these are numbers
var zero = f => x => x;
var one = f => x => f(x);
var two = f => x => f(f(x));
var three = f => x => f(f(f(x)));
var four = f => x => f(f(f(f(x))));


var toNumber = n => n(i => i+1)(0);
// Church Numerals

// Arithmetic
// add two numbers n and m

// Call the function n times, then call it m more times
var add = n => m => f => x => m(f)(n(f)(x));


// Multiplying
// call the function n times, m times over
var mul = n => m => f => x => m(n(f))(x);


// ****** BOOLEANS

var ifThenElse = bool => thn => els => bool(thn)(els);
var tru = thn => els => thn;
var falz = thn => els => els;

// Even if it's unpractical it shows how lambda calculus could be use to compute everything
