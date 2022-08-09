/*
Functions with memories

When our function get called we create a live sotre of data (local memory/variable environment/state) for that function's execution context

When the function finishes executing, its local memory is deleted (except the returned value)

But with closure our functions can hold on to live data between executions

This let our function definitions have an associated cache/persisten memory

It's based on returning a function from another function
*/


// First
// Functions can be returned from other functions

function createFunction() {
	function multiplyBy2 (n) {
		return n * 2 
	}

	return multiplyBy2
}

const generatedFn = createFunction()
const result = generatedFn(3)

// Second
// Calling a function in the same function call as it was defined

function outer (){
	let counter = 0

	function incrementCounter (){
		// check for counter in its scope and then goes up
		// because it was saved in memory connected to outer
		// so incrementCounter has access to outer local memory
		counter++
	}

	incrementCounter()
}

outer() // counter -> 1
//Creates a new execution context each time it's called
outer() // counter -> 1

// Third
// Calling a function outisde of the function call in which it was defined

function outer2 (){
	let counter = 0
	let random = 25
	function incrementCounter(){ counter++ }
	return incrementCounter
}

// it saved more than the function incrementCounter definition
// it took with it all the surrounding data from where that function was saved (the local memory of outer at the moment of being returned)
const newFunction = outer()

newFunction() // counter -> 1
newFunction() // counter -> 2


// random is deleted from memory after the execution context of outer is finished to optimize memory usage


// All the surrounding data attached to incrementCounter (not the code of the function itself) is called the "closed over variable environment/local memory"

// JavaScript has lexically static scoped language that means that the scope of the variables is given by where the function is written (not for where is invoked dinamically scope)

// Closure is a consecuence of lexically static scope



