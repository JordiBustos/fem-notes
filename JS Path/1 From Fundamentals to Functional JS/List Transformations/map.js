/*
Similar to forEach but with some key differences

- Produces a new array of values by mapping each value in list through a transformation function called iterator

- Each invocation of iterator is called with three args (element, index, list). If list is a JavaScript object, iterator's argument will be (value, key, list)
*/

// _.map([1, 2 3], function(v, i, list) { console.log(v) } )
// returns [undefined, undefined, undefined]


const colors = ['red', 'green', 'blue', 'purple']

const newColor = (color) => {
	return `new ${color}`
} 


let newColors = _.map(colors, newColor)
// ['new red', 'new green', 'new blue', 'new purple']

/*
	IMPLEMENTING _.map()
*/


const _ = {}

_.map = function (list, callback) {
	let newArr = []
	for (let i = 0; i < list.length; i++){
		newArr.push(callback(list[i], i, list))
	}

	/*
	 _.each(list, function(v, i, list) {
		newArr.push(callback(v, i, list))
	 } )
	*/
	return newArr
}
