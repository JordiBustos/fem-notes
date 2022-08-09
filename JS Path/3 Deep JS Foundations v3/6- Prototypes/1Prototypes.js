/*
Objects that exists in our programs there always created by "constructor calls" (via new)
when you use new in front of a function call it's creating an object.

JS doesn't create a copy of the class and then the object would have its "own life".
Metaphor of blueprints (class) of a building and the building itself (once instantiated).
This is how other languages works like Java or C++

So ->
A "constructor call" makes an object linked to its own prototype.
Copying vs linking (completely different)

*/

// Old school way of doing a prototypal class

function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
}

var deepJS = new Workshop('Kyle');
var reactJS = new Workshop('Suzy');

deepJS.ask('Is "prototype" a class?')

reactJS.ask('Is not "prototype" ugly?')


/*
  the objects deepJS and reactJS doesn't have the method
  ask. They have an internal hidden linkage called prototype chain.
  There is a link from deepJS to Workshop object and from Workshop to Object.prototype (global)

  If we look for a property on an object an we don't find it by default JS goes up in the prototype chain
  to look for that property untill we get to the top.
  But we call it with the "context" of the object deepJS so this keyword would point to Kyle
*/
