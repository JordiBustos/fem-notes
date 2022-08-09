// Takes two or more functions and combine them

const hello = (name) => {
	return `Hello my name is ${name}`
}

const exclaim = (something) => {
	return `${something.toUpperCase()!}`
}

const talk = ._compose(hello, exclaim)

talk('John')
// => Hello my name is JOHN!

// it's like doing hello(exclaim('John'))

/*
 * IMPLEMENTATION OF COMPOSE
*/

const compose = (...functions) => x => functions.reduceRight((acc, fn) => fn(acc), x)


