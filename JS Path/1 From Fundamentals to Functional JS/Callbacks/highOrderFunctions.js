/*
 High order function: enables functional programming
 		Functions can be treated as data -> we can pass function around and return it just as primitive values
*/

// 1- Takes a function as an input

element.addEventListener("change", () => {
	console.log('Element updated')
})

// 2- Returns a function as the output

const newFunction = (name) => {
	const length = name.length

	return (lastName) => {
		let totalLength = length + lastName.length
		return totalLength
	}
}


// CALLBACKS
// Functions that we pass to another function

const ifElse = (condition, isTrue, isFalse) => {
	return condition ? isTrue() : isFalse()
}

ifElse(true, () => console.log(true), () => console.log(false))

