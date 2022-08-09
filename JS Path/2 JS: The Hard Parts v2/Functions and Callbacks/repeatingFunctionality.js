function copyArrayAndMultiplyBy2 (arr) {
	const output = []

	for (let i = 0; i < arr.length; i++){
		output.push(arr[i] * 2)
	}
	return output
}

const arr = [1, 2, 3]
const result = copyArrayAndMultiplyBy2(arr)

function copyArrayAndDivideBy2 (arr) { 
        const output = []
        
        for (let i = 0; i < arr.length; i++){ 
                output.push(arr[i] / 2)
        }
        return output
}

const arr2 = [1, 2, 3]
const result2 = copyArrayAndDivideBy2(arr)

function copyArrayAndAdd3 (arr) {   
        const output = []
        
        for (let i = 0; i < arr.length; i++){ 
                output.push(arr[i] + 3)
        }
        return output
}

const arr3 = [1, 2, 3]
const result3 = copyArrayAndAdd3(arr)

// To no repeat code with little differences
// We can pass functionality as a parameter


// High order because takes a functions as an argument 
function copyArrayAndManipulate(arr, instructions) {
	const output = []

	for (let i = 0; i < arr.length; i++){
		output.push(instructions(arr[i]))
	}
	return output
}

function littleMultiplyBy2(n) { return n * 2 }

const result = copyArrayAndManipulate(arr, littleMultiplyBy2)

/*
        Functions are javascript first class objects (they can do everything that an objects can)
   
        So it can be saved as methods

	High order functions -> takes in or passes out a function
*/
