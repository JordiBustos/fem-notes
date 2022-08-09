const createTuple = (a, b, c, d) => {
	return [[a, c], [b, d]]
}

createTuple('Ja', 'Je', 'Ji', 'Jo', 'Ju')
// [ [ 'Ja', 'Je' ], [ 'Ji', 'Jo' ] ]


const createTupleSpread = (a, b, c, ...d) => {
	return [[a, c], [b, d]]
}

createTupleSpread('ja', 'je', 'ji', 'jo', 'ju')
// [['ja', 'je'], ['ji', ['jo', 'ju'] ]]


/*
	Before spread operator arguments keyword references all the arguments as a pseudo array
*/

const createTupleArgs = (a, b, c, d) => { 
        console.log(arguments) // doesn't work 'cause arrow function don't have arguments keyword
	return [[a, c], [b, d]]
}


const createTupleArgsFn = function(a, b, c, ...d) {
	console.log(arguments)
	// ['ja', 'je', 'ji', 'jo', 'ju']
	return [[a, c],[b, d]]
}
