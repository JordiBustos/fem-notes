// third way of invoking functions

function ask(question) {
  console.log(this.teacher, question);
}

var newEmptyObject = new ask('What is "new" doing here?');
// undefined What is "new" doing here?

/*
  Makes that the this keyword points at a whole new empty object
  invokes the function with a *new* this context
  1- Create a brand new empty object.
  2- Link that object to another object.
  3- Call function with this set to the new object.
  4- if function does not return an object, assume return of this.
*/

// fourth way of invoking a function is the default binding

var teacher = 'Kayle';

function askAgain(question) {
  "use strict";
  console.log(this.teacher, question);
}

// goes to global by default
ask("What's the non-strict-mode default?");
// Kyle What's the non-strict-mode default?

// with use strict doesn't go global
// specifically in strict mode, when you invoke it with no other this bindings
// the default behavior is leave "this" undefined.
ask("What's the non-strict-mode default?");
// TypeError cuz we are trying to access a property on the undefined value

/*
  if i have a function that is this-awared how do I know what its "this" keyword points at
  Instead of looking a the function, we need to look at the call site and how the function gets called.
*/
