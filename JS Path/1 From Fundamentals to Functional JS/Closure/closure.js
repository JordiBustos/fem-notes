// Advanced scope

const newAlert = () => {
	const x = 'some text'

	const alerter = () => {
		alert(x)
	}

	alerter()
}

newAlert()

// Example 2:

const myAlert = () => {
	const x = 'new some text'

	const alerter = () => {
		alert(x)
	}

	setTimeout(alerter, 1000)
	console.log('What happens first? this log or the alert')
	// console 'cause setTimeout it's asynchronous
}

myAlert()

// Example 3: Creating closure

const myThirdAlert = () => {
	const x = 'more text xd'

	let count = 0
	const alerter = () => {
		alert(`${x} ${++count}`)
	}
	return alerter
}

const funcAlert = myThirdAlert()
const funcAlert2 = myThirdAlert() // new execution context 

funcAlert() // 'more text xd 1'
// 'cause count it's in the parent scope
funcAlert() // 'more text xd 2'

// separated execution context  
funcAlert2() // more text xd 1
