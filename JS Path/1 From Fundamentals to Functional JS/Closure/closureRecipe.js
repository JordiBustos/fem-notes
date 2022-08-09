/*
	Recipe:

1- Create your parent function -> e.g the checkscope function

2- Define some variables in the parent's local scope -> can be accesesed by the child function e.g var innerVar = 'local scope'

3- Define a function inside the parent function. Child function

4- return that function from inside the parent function
*/

const checkScope = () => {
	var innerVar = 'local scope'

	const innerFunction = () => {
		innerVar =+ 'xd' 
		return innerVar
	}

	return innerFunction
}

/*
 * Execution ->
 * Run parent function and save it to a variable
 * Run the inner function
 */
let scope = checkScope()

let scope2 = checkScope()

scope()




