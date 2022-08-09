/*
  Same principles that function scoping but with blockd scope

  Instead of an IIFE we can use
  {
    let variable = 'something'
  }
*/

var teacher = 'Kyle'

{
  // Use let because var would have attatched itself to the outer scope
  let teacher = 'Suzy'
  console.log(teacher) // Suzy
}

console.log(teacher) // Kyle

/*
  Use let in places where it's already obvious and correct design for you to block something
  let as a replacement for semantically signalled block scope
*/

function diff(x, y){
  if (x > y){
    // tmp belongs just to if block
    let tmp = x
    x = y
    y = tmp
  }

  return y - x
}


// A semantic example of why use var keyword

function repeat(fn, n){
  // result is used inside the for block and in the function scope
  var result;

       // i belongs to for block only
  for (let i = 0; i < n; i++){
    result = fn(result, i)
  }
  return result
}


// Behavioral Example 2

function lookupRecord(searcStr){
  // if we use let with id this returns an error. Put the assignements close to the declarations makes code more readeable.
  // we send the messagge to the reader that whatever happens an id variable would be returned and that the var id belongs to function scope
  try {
    var id = getRecord( searcStr )
  }
  catch (e){
    var id = -1
  }

  return id
}

// If there is a variable that only need to exists for a couple of lines
// a best practice is to make a block of it

function formatStr(str){
  { let prefix, rest; // these two are created for this block and exists only in this block
    prefix = str.slice(0, 3)
    rest = str.slice(3)
    str = prefix.toUpperCase() + rest
  }
  if (/^FOO:/.test( str )) return str

  return str.slice(4)
}
