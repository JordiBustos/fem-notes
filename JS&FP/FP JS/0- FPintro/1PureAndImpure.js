let name = 'someone'

// not pure
function greet(){
  console.log(`Hello ${name}`)
}

greet()
name = 'other'
greet()

//-------------------

// pure function
function greetPure(name) {
  // it's deterministc 'cause the output depends entirely on inputs
  return `Hello, ${name}`
}

greetPure('some')
greetPure('other')
