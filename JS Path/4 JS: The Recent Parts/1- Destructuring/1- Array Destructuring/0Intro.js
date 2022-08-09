/*
  Destructuring:
    decomposing a structure into its individual parts
    Assign to individual parts from some larger structure
*/

var tmp = getSomeInfo();

var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ? first.email: 'nobody';

var secondName = second.name;
var secondEmail = second.email !== undefined ? second.email : 'nobody';

/* With Destructuring */

// A pattern to describe with type of what kinda value we are expecting to get
var [
  {
    name: firstName,
    email: firstEmail = 'nobody'
  },
  {
    name: secondName,
    email: secondEmail = 'nobody'
  }
] = getSomeInfo();
