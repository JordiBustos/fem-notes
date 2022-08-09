// Takes an array and a callback
// Returns a new array that contain values that returns trues from the callback

const _ = {}

_.filter = function(arr, callback) {
	// Like map but with filtering
	let newArr = []
	for (let i = 0; i < arr.length; i++){
		if (callback(arr[i], i, arr)){
			newArr.push(arr[i])
		}
	}
	return newArr
}


_.filterEach = function(arr, callback){
	let newArr = []
	_.each(arr, function(val, i, list){
		if(callback(val, i, list)) newArr.push(val)
	})
}



