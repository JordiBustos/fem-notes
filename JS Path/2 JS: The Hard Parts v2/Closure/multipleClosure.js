function outer () {
	let counter = 0

	function incrementCounter(){ counter++ }
	return incrementCounter
}

const newFn = outer()
newFn()
newFn() // counter -> 2

const secondFn = outer()
secondFn()
secondFn() // counter -> 2

// This happens because de C.O.V.E (close over variable environment) it's created again every time outer is called with its corresponding variable declarations in the brand new execution context

/*
 * Applications: Helper functions 'once' and 'memoize'
 * Iterators and generators which use lexical scoping and closure to achieve most contemporary patterns for handling data
 * Module pattern preserve state for the life of an app without polluting the global namespace
 * Asynchronous JavaScript
*/
