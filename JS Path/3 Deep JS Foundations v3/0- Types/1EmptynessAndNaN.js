/*
  Undeclared: Never been created in any scope that we have access to
  Undefined: It's a variable but at the moment it has no value
  Uninitialized TDZ (temporal dead zone): Certain variables don't get initialized not even to undefined, can't be touched
*/

typeof undeclaredVariable // 'undefined' but the variable it's undeclared

let v; // undefined

// ----------------------- //

/*
  NaN (not a number) -> indicates an invalid value
*/

let age = Number('0o46')      // 38
let otherAge = Number('39')   // 39

let catAge = Number('n/a')    // NaN

age - "my son's age"          // NaN

catAge === catAge  // false 'cause NaN it's not equal to itself

isNaN(age)              // false
isNaN(catAge)           // true
isNaN("my son's age")   // true tries to coerce to a number

/*
  isNaN('some string') = Number.isNaN(Number('some string'))
*/

Number.isNaN(catAge)          // true -> because it tries to coerce to a number and then gets NaN
Number.isNaN("my son's age")  // false -> false because it's not coerced so string != NaN
