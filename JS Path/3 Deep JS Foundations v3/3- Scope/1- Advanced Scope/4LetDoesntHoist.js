{
  teacher = 'Kyle' // TDZ error -> temporal dead zone error
  let teacher
}

// Other example

var teacher = 'Kyle'

{
  console.log(teacher) // TDZ error
  let teacher = 'Suzy'
}

/*
  ************Let doesn't hoist is a false statement****************
  There is a difference between how they hoist:
  1- Lets and consts only hoist to a block whereas vars hoist to a function
  2- var when it creates its variables and has the plan during the compile time for the scope
     and says there's gonna be a variable called teacher in this scope, it also says when tthe scope starts initialize to undefined
     when let and const hoists in its scope doesn't initialize variables (it means you can touch it yet)
*/

// So the bellow example it can be interpreted as

var teacher; // undefined
teacher = 'Kyle'

{
  let teacher // unitialized
  console.log(teacher) // TDZ error
  teacher = 'Suzy'
}

/*
  The hoist behavior with let and const it's created because if
  we get
  const teacher
  console.log(teacher) // undefined
  teacher = 'Suzy'

  A const variable would have two different values at two different times
  so this violates the concept of a const and then extended TDZ to let too
*/
