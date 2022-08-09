const increment = n => return n + 1
const square = n => return n*n

const math = (n, cb) => return cb(n)

math(5, increment) // 6
math(5, square) // 25



//----------------------------//

const ifElse = (condition, isTrue, isFalse, ...args) => {
	// calls isTrue one arg at the time
	return condition ? isTrue(...args) : isFalse(...args)
}

ifElse(true, fn1, fn2, 'Hi', 'Hello', 'Hola')
// ...args = ['Hi', 'Hello', 'Hola']
