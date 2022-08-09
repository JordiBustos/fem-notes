// Function declaration -> Scope: Global
function teacher (){
  // code
}
                  // Function expression -> Put the identifier in their own scope
const myTeacher = function anotherTeacher(){ // it has the scope of myTeacher
  console.log(anotherTeacher)
}

console.log(teacher)        //
console.log(myTeacher)      //
console.log(anotherTeacher) // Reference error

/* NAMED FUNCTION EXPRESSION */

                 // Named function expression
var keyHandler = function keyHandler(){
  // code
}

                   // Anonymous
var clickHandler = function(){
  // code
}

/*
  Kyle Simpson: You should absolutelly ever use named function expressions instead of anonymous

  1- Allows self-reference (recursion, access to properties, unbind, etc)

  2- More debuggable stack traces

  3- More self-documenting code

  And use function declaration instead of function expression every time it is possible
  (important if the function is going to be used as a callback for .map, .then, etc.)
*/
