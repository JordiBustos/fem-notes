var ACCESS

function () {
	var outer = 'outer'

	var fn = function () {
		var inner = 'inner'
		ACCESS = inner + outer
	}

	fn()
	ACCESS // => 'innerouter'
}


function () {
	var outerCounter = 10

	var fn = function() {
		outerCounter += 1
		ACCESS = outerCounter
	}
	
	fn()
	ACCESS // => 11
	fn()
	ACCESS // => 12
}






