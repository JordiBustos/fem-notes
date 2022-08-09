const constructArr = function() {
	const arr = Array.from(arguments)
	arr.push('d')
	return arr
}


constructArr('a', 'b', 'c')
// ['a', 'b', 'c', 'd']

/*
 * IMPLEMENTATION
 */

const from = arr => {
	// Receives an array-like object. Doesn't have methods like push or pop
	// e.g {0: _, 1: _, 2: _, length: 3}
	// returns an array
	
	return Array.prototype.slice.call(arguments)
}

// Reminder functions are objects and can have their own methods
