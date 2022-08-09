function Workshop(teacher) {
  this.teacher = teacher;
}

// this is linked to Object.prototype
Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

function AnotherWorkshop(teacher) {
  Workshop.call(this, teacher);
}

// this has a linked to Workshop.prototype it work as the extends keyword
AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function(msg) {
  this.ask(msg.toUpperCase());
};

    // this has a linked to AnotherWorkshop.prototype
var JSRecentParts = new AnotherWorkshop('Kyle');

// Doesn't find the property on JSRecentParts -> goes up to AnotherWorkshop.prototype and find it.
JSRecentParts.speakUp('Is this actually inheritance?');
// Kyle Is this actually inheritance?

/*
Object.create -> create a brand new object and then links that object to another object.
                 first to steps of new algorithm
*/



JSRecentParts.ask('Something');

/*
  Goes to AnotherWorkshop.prototype: doesn't find the property ask
  -> goes up to Workshop.prototype find the property ask
  -> but the this keyword still points to JSRecentParts
*/
