// http://csbin.io/closures
//
// CHALLENGE 1

/*
Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
*/

function createFunction() {
	
	const sayHello = () => {
		console.log('hello')
	}

	return sayHello
}


// CHALLENGE 2


/*
Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
*/

function createFunctionPrinter(input){
	const fn = () => {
		console.log(input)
	}
	return fn
}

// CHALLENGE 3

/*
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.
*/


function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('Counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

willCounter(); // -> Counter 1
willCounter(); // -> Counter 2
willCounter(); // -> Counter 3

jasCounter();  // -> Counter 1
willCounter(); // -> Counter 4

function addByX(x) {
	const fn = n => {
		return n + x
	}

	return fn
}


// CHALLENGE 4

/*
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

function once(func) {
	let firstTime = true
	let onceVal
	const fn = n => {
		if (firstTime) { onceVal = func(n); firstTime = false }
		return onceVal
	}
}

// CHALLENGE 5


/*
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/

function after(count, func){
	let counter = 0

	const fn = n => {
		if (counter < count) { counter++; return }
		func(n)
	}

	return fn
}

// CHALLENGE 6

/*
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/
function delay(func, wait, ...args) {
	setTimeout( () => func(...args), wait)
}

// Challenge 7

/*
Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
*/

function rollCall(names) {
	let counter = 0
	fn = () => {
		if (counter < names.length){
			console.log(names[counter])
			counter++
		} else console.log('Everyone accounted for')

	}

	return fn
}

// Challenge 8

/*
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.
*/


function saveOutput(func, magicWord){
	let memo = {}
	const fn = arg => {
		if (arg !== magicWord){
			memo[arg] = func(arg)
			console.log(func(arg))
		} else return memo
	}
	return fn
}

// Challenge 9

/*
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
*/

function cycleIterator(arr){
	let counter = 0

	const reset = () => counter = 0

	const fn = () => {
		if (counter < arr.length) return arr[counter]
		else {
			reset(); arr[counter]
		}
	}

	return fn
}

// Challenge 10

/*
Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.
*/

function defineFirstArg(func, arg){
	
	const fn = arg2 => {
		return func(arg, arg2)
	}
	return fn
}

// Challenge 11

/*
Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.
*/

function dateStamp(func){
	let memo = {}
	const fn = (...args) => {
		memo[Date.now()] = func(...args)
		return memo
	}
	return fn
}

// Challenge 12

/*
Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).
*/

function censor(){
  let memo = {}
  let counter = 0 
  
  const fn = (str, str2 = undefined) => {
      if (str2 !== undefined) { 
    	memo[counter] = [str, str2]
        counter++
      } else { 
          let newStr = str
	  for (let key in memo){
          	newStr = newStr.replace(memo[key][0], memo[key][1])
          }
        return newStr    
    	}
    }
    return fn
}

// Challenge 13

/*
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret
*/

function createSecretHolder(secret){
	const obj = {}

	obj.getSecret = () => {
		console.log(secret)
	}
	obj.setSecret = (v) => {
		secret = v
	}
	return obj
}

// Challenge 14

/*
Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.
*/

function callTimes() {
	let counter = 0
	const fn = () => {
		return ++counter	
	}
	return fn
}

// Challenge 15

/*
Create a function roulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'spin' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'win'. On every invocation after that, the returned function returns the string 'pick a number to play again'.
*/

function roulette(n){
	let counter = 1
	const fn = () => {
		if (counter < n) { console.log('spin'); counter++ }
		else if (counter === n) {console.log('win'); counter++}
		     else console.log('pick a number to play again')
	}
	return fn
}

// Challenge 16

/*
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.
*/

function average(){
	let acc = 0
	let times = 0
	const fn = (n = undefined) => {
		if (n !== undefined) {
			acc += n
			times++
			return acc / times
		} else {
			if (acc === 0 && times === 0) return 0
			return acc/times
		}
	}
	return fn
}


// Challenge 17

/*
Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.
*/

function makeFuncTester(arrOfTests) {
	const fn = cb => { 
		for (let i = 0; i < arrOfTests.length; i++){
    	if (cb(arrOfTests[i][0]) !== arrOfTests[i][1]) return false
  	}
  	return true
  }
  return fn
}

// Challenge 18

/*
Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.
*/

function makeHistory(limit){
	let memo = []    
	let lastOne = ''
	const fn = str => {	
    		if (str === 'undo'){ 
    			if (memo.length === 0){
        			console.log('nothing to undo'); return
      			}
      			else { 
      				memo = memo.filter(item => item !== lastOne)
        			console.log(`${lastOne} undone`)
        			lastOne = memo[memo.length - 1]; return
      			}       
    		}	                          
    		if (memo.length >= limit) memo.shift()
  		memo.push(str);
    		lastOne = memo[memo.length - 1]; 
    		console.log(`${str} done`)
  	}
	return fn	
}




