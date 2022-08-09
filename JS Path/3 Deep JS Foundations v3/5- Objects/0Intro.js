/*
  OOP
    - this
    - class {}
    - Prototype
    - "Inheritance" vs "Behavior Delegation"
        OO                      OOLO (objects linked to other objects)
        Object oriented
*/

/*
  this keyword
  A function's this references the execution context
  for that call, determined entirely by how the function was called
  A this-aware function can thus have a different
  context each time it's called, which makes it more flexible and reusable
*/

var teacher = 'Kyle';

function ask(question) {
  console.log(teacher, question);
}

function otherClass() {
  var teacher = 'Suzy';

  ask('Why?');
}

otherClass(); // Kyle Why?

//**************

function askTwo(question) {
  console.log(this.teacher, question)
}

function otherClass() {
  var myContext = {
    teacher: 'Suzy'
  };

  ask.call(myContext, 'Why?')
}

otherClass(); // Suzy Why?
