const add = (a, b = 2) => {
	// Arguments will not show default parameters 
	// Only returns arguments
	return a + b 
}

add(3) // 5
add(3, 3) // 6


/*
 IMPLEMENTATION OF DEFAULT PARAMETER
*/

const add = function (a, b) {
	// if the first is true stops 
	// if the first is false evaluate the second one
	b = b || 2
	return a + b 
}


/* if b exists then the value is 2
 * b = b && 2
 *
 */
