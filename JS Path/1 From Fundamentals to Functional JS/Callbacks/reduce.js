/*
	Receives a collection, an accumulator, prev and curr val
	Loops through the collection calling the callback function and then based on whatever the function returns pass it and put it on the acc
	Returns only one value
*/


_.reduce([1, 2], function(sum, n){
	return sum + n
}, 0)

// => 3

_.reduce({'a':1, 'b': 2, 'c': 1}, function(result, value, key){
	(result[value] || (result[value] = [])).push(key)
	return result
}, {})

// => {1: ['a', 'c'], 2: ['b']}


/*
 *  IMPLEMENTING REDUCE
*/



const _ = {}

_.reduce = (arr, cb, i) => {
	let memo = i
	for (let j = 0; j < arr.length; j++){
		if (j === 0 && memo === undefined) memo = arr[0]
		else memo = cb(arr[j], memo)
	}

	return memo
}

_.reduce([2, 3, 4], (v, sum) => return v + sum)















