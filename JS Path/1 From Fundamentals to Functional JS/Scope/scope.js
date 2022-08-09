/*
Scope: Is the area where a variable has access to some value
Global variables

window.myGlobalVariable
myGlobalVariable -> without let, var, const


Local Variable
variable with let const var

*/


// Function scope

const parentFn = () => {
	let canAccess = true
	const childFunction = () => {
		canAccess = 10
		let childVariable = true
	}
	// can't access childVariable from here
}

// EXAMPLE
var ACCESS

const parentFunction = () => {
	const fn = () => {
		var canAccess = 'yes'
		ACCESS = canAccess
	}
	fn()

	ACCESS // => 'yes'
}


// Inputs to a function are treated as local scope variables

const parentFunction2 = () => {
	const inputFunction = (canAccess) => {
		ACCESS = canAccess
	}
	inputFunction('yes')
	ACCESS // => 'yes'
}


// Block Scope can be created with let

const parentFunction3 = () => {
	const fnTwo = () => {
		var where = 'outer'
		// BLOCK -> anything with two brackets
		{
			let where = 'inner'
			// if where is declarated with var
			// ACCESS = 'inner'
		}
		
		ACCESS = where
	}
	fnTwo()

	ACCESS // => 'outer'
}


// A function has access to the variables contained within the same scope that function was created in

const parentFunction4 = () => {
	var where = 'outer'
	const fn3 = () => {
		// looks for where in its block and then goes up to parent function scope to look for where variable
		ACCESS = where
	}
	fn3()

	ACCESS // => 'outer'
}

// A function's local scope variable are not available anywhere outside that function

function () {
	var firstFn = function () {
		var localToFirstFn = 'inner'
	}
	
	firstFn()
	
	var secondFn = function (){
		ACCESS = localToFirstFn // throw error localToFirstFn it's not defined
	}
}

function () {
	// checks here for firstVar when call second()
	var first = function () {
		// not here -> lexical scope
		var firstVar = 'first'
		second()
	}
	var second = function () {
		ACCESS = firstVar
	}

	// if we call first() or second()
	// both throws an error 'cause first and second are siblings 
}

function () {
	var sameName = 'outer'
	var fn4 = function(){
		var sameName = 'inner'
		ACCESS = sameName
	}
	fn4()
	// ACCESS => 'inner'

}

function () { 
        var sameName = 'outer'
        var fn4 = function(){ 
                var sameName = 'inner'
        }
        fn4()
        ACCESS = sameName // first in scope
	// ACCESS => 'outer'
 
}









