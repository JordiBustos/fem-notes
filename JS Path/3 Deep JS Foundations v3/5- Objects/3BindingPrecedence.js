var workshop = {
  teacher: 'Kyle',
  ask: function ask(question) {
    console.log(this.teacher, question);
  }
};

new (workshop.ask.bind(workshop))('What does this do?');

// Not recommended but actually works
// Why?
/*
  The determination for the this keyword is:

    1- Is the function called by new?
       if so the newly created object will be the this keyword

    2- Is the function called by call() or apply() or bind()?
       if so the context object that is specificied will be used

    3- Is the function called on a context objec? Like workshop.ask()
       if so uses that object

    4- Default: global object (except strict mode)
*/
