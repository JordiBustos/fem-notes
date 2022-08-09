const createFunction = () => {
	let counter = 0

	const incrementOnce = () => {
		if (counter + 1 === 1) console.log(++counter)
		else console.log('Not possible :(')
	}

	return incrementOnce
}

const newFunction = createFunction()

newFunction()
newFunction()
