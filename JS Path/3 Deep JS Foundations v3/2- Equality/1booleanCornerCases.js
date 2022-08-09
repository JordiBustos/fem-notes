let arr = []

if (arr){
  // if (Boolean(arr)) {}
  // if (true) {}
  // yep
}

if (arr == false){
  // if ('' == false)
  // if (0 === 0)
  // if (true)
  // yep
}

if (arr == true){
  // if ('' == true)
  // if (0 === 1)
  // if (false)
  // never
}

[] == false     // true
![] == false    // true
!![] == false   // false

/*
  For types coercion problems
  Avoid:
    1- == with 0 or '' or '   '
    2- == with non primitives values (not even to check identity)
    3- == true or == false: Allow Boolean() or use ===
*/
