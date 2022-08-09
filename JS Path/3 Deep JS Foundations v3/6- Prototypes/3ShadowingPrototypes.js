function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop('Kyle');

deepJS.ask = function(question) {
  // this points to deepJS *
  this.ask(question.toUppercase());
};

// *because it's called here
deepJS.ask('Infinite recursion')

/*
  Solution
*/

deepJS.ask = function(question) {
      // goes up one level on the chain and invoke it in this context
  this.__proto__.ask.call(this, question.toUpperCase());
};

deepJS.ask('Is this fake polymorphism?');
// Kyle Is this fake polymorphism?
