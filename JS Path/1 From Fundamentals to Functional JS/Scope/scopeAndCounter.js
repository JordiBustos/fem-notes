// A new variable scope is created for every call to a function
// this scope created is called execution context

var ACCESS

function () {
	var fn = function(){
		var innerCounter = innerCounter || 10
		innerCounter += 1
		
		ACCESS = innerCounter
	}

	fn()
	ACESS // => 11
	fn() 
	ACCESS // => 11
}


function () {
	var fn2 = function (){
		var localVariable
		if (localVariable === undefined) ACCESS = 'alpha' 
		else if (localVariable === 'initialized') ACCESS = 'omega'
		localVariable = 'initialized'
	}

	fn2()
	ACCESS // => 'alpha'
	fn2()
	ACCESS // => 'alpha'
}










