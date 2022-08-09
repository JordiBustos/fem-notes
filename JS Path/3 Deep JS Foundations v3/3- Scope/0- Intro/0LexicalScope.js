/*
  Lexical Scope is a mechanism of JS and it's determined at compile time.
  Determines the scope based on when the variable it's declarated not where is executed or called
  Scope is where to look for identifiers and cannot be changed in execution time

  A variable's assigned to a value or you are retrieving a value from the variable
  JS is a parsed language (different from compilled ones) but it doesn't runs top to bottom
  before get's parsed (if we have a syntax error on line ten we get the error before line 1-9 are executed)
  When the source code of the file get's parsed at JavaScript Virtual Machine in the JavaScript Engine
  the compillation set up the scopes and then executes it.

  Blocks and functions: Units of scope

  The execution context of a function it's based on the information that's created when the source code is parsed
  and every time a new execution context of the very same function is created is based on the same.


  // Formal declaration -> let, const, var, function...
*/
    // identifier -> assigns 42 to x
let x = 42
            // the value of x it's retrieved
console.log(x)

//-------------//

// Formal declaration | target -> get a value assigned
var teacher = 'Kyle' // -> global scope

// Formal declaration
function otherClass(){ // -> global scope
  // NEW SCOPE
  var teacher = 'Suzy' // -> in this new scope there are no teacher var so it's created (shadowing)
  // after here we cannot reference lexically to first teacher var
  console.log('Welcome!') // doesn't find console in this scope so it goes one block up (global scope in this case)
  // END NEW SCOPE
}

function ask(){ // -> global scope
  // NEW SCOPE
  var question = 'Why?' // only referentiable here
              // search in this scope and if it doesn't find question var then search for it on global scope
  console.log(question)
  // END NEW SCOPE
}

// Source -> are pulling a value out
otherClass(); // Welcome!
ask();        // Why?

//------------------//

// Formal declaration on compilation professor get assigned on global scope
    // target <-
var professor = 'Kyle'

function anotherClass(){ // Formal declaration -> global scope
  // NEW SCOPE
  // There are no formal declaration so compilation doesn't do nothing
  professor = 'Suzy' // goes upward to search for professor reference in global scope
  topic = 'JavaScript' // goes upward to search for topic in global scope
  console.log('Welcome!')
  // END NEW SCOPE
}

// Source reference -> receives a reference to anotherFunction in global scope
anotherClass() // Welcome!

professor // Suzy
topic     // JavaScript 'cause it's auto-global variable



/*
  At line 61 when goes upward to search for topic in global scope. JavaScript creates a reference to topic
  automatically and returns it to the respective scope.
  This is called auto-global variable. Absolutelly non-recommendable
  "use stric" avoids this problem
*/



/*
  The scope and memory allocation of the declarated variables it's determined at compile time so
  a function knows where to go in order to find some variable
  it's not like if the function goes up "searching" for it but actually already knows at execution time where's the variable

  In runtime the scope never changes so lexically scope it's extremelly optimizable
*/
