/*
  Use const instead of let wherever possible.
  const doesn't mean a "thing" that doesn't change, it means that
  a variable that can't be reassigned
  But use it in some specific cases because have some cons
    - With inmutable primitive values
  We need to be well aware about the difference between a mutable values and
  mutable assignements
*/

var teacher = 'Suzy'
teacher = 'Kyle' // OK

const myTeacher = teacher
myTeacher = 'Suzy' // TypeError

const teachers = ['Kyle', 'Suzy']
teachers[1] = 'Brian' // Allowed, we can mutate the value



// EXAMPLE of when use it

const pi = 3.1415
const API_Url = 'https://example.com/api/'

// do something with pi several times
// api url never change

/*
  Object.freeze to make an object inmutable
*/
