/*
  Coercion example
*/

let num = 16
console.log(`There are ${num} students.`) // num get coers to a string


let msg1 = 'There are'
let n = 16
let msg2 = 'students.'

// String concatenation -> coers n to string
console.log(msg1 + n + msg2)

/*
Plus operator, if any of the operands is a string, it prioritize string concat
*/

console.log(`There are ${[n].join('')} students.`)
console.log(`There are ${n.toString())} students.`)

//                     Fundamental object
console.log(`There are ${String(n)} students.`)

function addAStudent(n) {
  return n + 1
}

addAStudent(studentsInput.value) // 161

addAStudent(
  // unary plus operator invokes abstract operation toNumber()
  +studentsInput.value
)

!!n // coers it to boolean

Boolean(undefined)  // false
Boolean(null)       // false
Boolean({})         // true
