function data() {
  return [1,2,3];
}

var tmp = data();
var first = tmp[0];
//var second = tmp[1];
var third = tmp[2];


var tmpDestructured;
var [
  first,
  , // avoid the second item -> array ellision
  third
] = tmpDestructured = data();

//--------------------------------------------------------------------

// EASY SWAP

var x = 10;
var y = 20;

// old way
{
  let tmp = x;
  x = y;
  y = tmp;
}

// destructuring
[x, y] = [y, x];
