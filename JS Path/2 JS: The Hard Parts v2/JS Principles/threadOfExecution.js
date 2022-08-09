/*
Thread of execution:
	Goes through the code line-by-line and runs/executes each linea
Also saves data like primitive types or objects in its memory
JavaScript has only one thread
*/

const num = 3 // store identifier num with the value 3 in memory

const multiplyBy2 = (n) => { // store identifier multiplyBy2 and code
	const result = n * 3
	return result
}

const output = multiplyBy2(num) // defines constant output and remains unitiliazied untill function call it's completed

/*
	Creates an execution context

	Created to run the code of a function - has to parts thread of execution and a local memory

	First initializes parameters with its respectives args
	Then executes the body function
	Return goes to the local memory and takes the value of result and assigns 6 to ouput

	Everything is deleted in memory except for the value returned
*/



const newOutput = multiplyBy2(10) // creates a new execution context

