let teacher = 'Kyle'

// .. some code

  // Other person code
let teacher = 'Suzy'
console.log(teacher)

// .. some code

console.log(teacher) // naming collision problem in the same scope




/*
  We can wrap a function around it to protect scope
*/

let teacherWrapped = 'Kyle'

function anotherTeacher(){ // collision may occur now in function name
  let teacherWrapped = 'Suzy'
  console.log(teacherWrapped)
}

console.log(teacherWrapped)

/*
  Principle of least exposure:
    You should default to keeping everything private and only expose it the minimal necessary

    IIFE Inmediatly invoked function expression

    (function someName() {
      'use strict'; // if required

    }());
    Creates an scope to protect variables it's a once and done function
    it's not a function declaration because de word function it's not the first in the statement
*/

var teacher = 'Kyle'

( function anotherTeacher(){
  var teacher = 'Suzy'
  console.log(teacher) // Suzy
})();

console.log(teacher) // Kyle

/* WITH ANONYMOUS FUNCTION */

var teacher = 'Kyle'

(function(teacher){
  console.log(teacher)
})('Suzy')

console.log(teacher)
