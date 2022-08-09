/*
  Partially apply functions
  - Lock in some args and make more reusable functions.
  ->
    Currying:
      breaks up a multi-arg function into a series of single-args ones
*/

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

function curryGreet(greeting) {
  return function(name) {
      return `${greeting}, ${name}!`
  }
};

const greetItal = curryGreet('Ciao');
greetItal('Alonzo');

const greetTex = curryGreet('Howdy');
greetTex('Alonzo');
greetTex('Alan')
