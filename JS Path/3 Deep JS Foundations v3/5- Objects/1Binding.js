// Implicit binding

// First way
function ask(question) {
  console.log(this.teacher, question);
}

var workshop = {
  teacher: 'Kyle',
  ask: ask,
};

var workshop2 = {
  teacher: 'Suzy',
  ask: ask,
};

workshop.ask('What is implicit binding?');
// Kyle What is implicit binding?

// Different context ->

workshop2.ask('What is implicit binding?');
// Suzy What is implicit binding?

// Second way explicitly binding

var workshop3 = {
  teacher: 'Kyle'
};

var workshop4 = {
  teacher: 'Suzy'
};

// .call says invoke this function with the "this" context of workshopX
ask.call(workshop3, 'Can I explicitly set context?');
// Kyle Can I explicitly set context?

ask.call(workshop4, 'Can I explicitly set context?')
// Suzy Can I explicitly set context?


// 2.b way hard binding ->

var workshop5 = {
  teacher: 'Kyle',
  ask(question) {
    console.log(this.teacher, question);
  }
}
          // this way invokes in the global object context
setTimeout(workshop5.ask, 10, 'Lost this?');
// undefined Lost this?

setTimeout(workshop5.ask.bind(workshop5), 10, 'Hard bound this?');
// Kyle Hard bound this?

/*
  iF WE WANT FLEXIBLE DYNAMISM, USE THIS KEYWORD, IF WE WANT PERDICTABILTY USE CLOSURE AND LEXICAL SCOPE
*/
