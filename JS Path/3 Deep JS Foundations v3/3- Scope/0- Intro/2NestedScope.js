// GLOBAL SCOPE
var teacher = 'Kyle' // Formal declaration -> global scope

function otherclass(){
  // NEW SCOPE -> FN1
  var teacher = 'Suzy'

  function ask(q){
    // NEW SCOPE -> FN2
    console.log(teacher, q)
    // END SCOPE -> FN2
  }

  ask('Why?')
  // END SCOPE -> FN1
}

otherClass() // Suzy
ask('????')  // Global Scope -> Source reference to an identifier called ask, doesn't find it -> Reference error
// END GLOBAL SCOPE

/*
  Undefined: A variable exists but at the moment it has no value
  vs
  Undeclared: Never formally declared in any scope that we has access to
*/
