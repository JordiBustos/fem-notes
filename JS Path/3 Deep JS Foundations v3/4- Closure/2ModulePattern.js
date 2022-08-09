// This is not a module there are not encapsulation
var workshop = {
  teacher: 'Kyle',
  ask(question) {
    console.log(this.teacher, question)
  }
}

workshop.ask('Is this a module?')
// Kyle Is this a module?

/*
  Namespace pattern: Taking a set of functions and data and
  putting them data inside of an object as properties.
*/

/********************************

  Modules encapsulate data and methods together. The state of a module
  is held by its methods via closure.
  Concept of least exposure privilege ->
*********************************/

var workshopEncapsulating = (function Module(teacher) {
  var publicAPI = { ask };
  return publicAPI

  function ask(question) {
    console.log(teacher, question)
  }
})('Kyle');

workshop.ask('This is a module with IIFE')
// workshop.teacher doesn't work because is hidden

/*
  Same but different syntax
*/
function WorkshopModule(teacher) {
  var publicAPI = { ask };
  return publicAPI

  function ask(question) {
    console.log(teacher, question)
  }
};

var workshopTwo = WorkshopModule('Kyle');

workshopTwo.ask('This is a module with function declaration')
