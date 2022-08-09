// dunderproto = __proto__

function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop('Kyle');

deepJS.constructor === Workshop

deepJS.__proto__ === Workshop.prototype; // true
Object.getPrototypeOf(deepJS) === Workshop.prototype; // true

/*
deepJS.__proto__ points to the thing that it's linked to.
deepJS doesn't have a property called __proto__
-> it goes from deepJS up Workshop.prototype
-> it goes up to Object.prototype it is a __proto__
   here and it's a getter function so it's going
   to invoke it as if it's was a function and the this keyword would be deepJS
So we obtain the hidden linkage called the prototype chain
*/


/*
  Aside note: arrow function doesn't have this keyword but do have lexical scope
  arrow function doesn't have a prototype associated.
*/



// Object.setPrototypeOf() allows to change __proto__ changing the linkage of the object
// improbable usefull but can be possible
