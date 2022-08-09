/*
When the arrow function it's invoked is poiting at the workshop object
Lexical this behavior.
*/

var workshop = {
  teacher: 'Kyle',
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 100)
  }
};

workshop.ask('Is this lexical "this"?');
// Kyle Is this lexical "this"?


/*
Lexical this: ARROW FUNCTION DOESN'T HAVE THIS KEYWORD. IT JUST KEEP GOING LEVEL BY LEVEL UNTILL IT FINDS A DEFINITION OF THIS KEYWORD

Arrow function doesn't define the this keyword at all
if you put the this keyword inside of an arrow function it's gonna behave as any other variable
so goes up in the scope to find the definition of the this keyword in ask function scope

Spec:
  An ArrowFunction doesn't define local bindings for arguments, super, this or new.target. ANy reference to arguments, super, this or new.target within an arrow function must resolve to a bindingin a lexically enclosing environment.
*/

var workshopTwo = {
  teacher: 'Kyle',
  ask: question => {
    // this arrow function go up one level to global scope to resolve this keyword
    // BECAUSE OBJECTS ARE NOT SCOPES. So resolve it lexically.
    console.log(this.teacher, question)
  }
}

workshopTwo.ask('What happened to "this"?');
// undefined What happened to "this"?

workshopTwo.ask.call(workshop, 'Still no "this"?')
// undefined Still no "this"?

/*
  So only use => arrow function when you need lexical this.

  Properties of an object aren't scoped. Properties aren't lexical identifiers. It's a member on an object value. Doens't participate in lexical scope.
*/
