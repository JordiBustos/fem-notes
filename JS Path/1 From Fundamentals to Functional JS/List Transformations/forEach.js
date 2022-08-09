function CreatePerson(name) {
	return {
		name: name,
		color: name.split(' ')[2],
		speak: function () {
			console.log("Hi I'm ", name)
		}
	}

}


// ES6 Feature works the same than previous function

function CreatePersonES6(name) {
	return {
		name: name,
		color: name.split(' ')[1],
		speak() {
			console.log("Hi I'm ", name)
		}
	}
}

let persons = ['Jane Doe', 'Jhon Don', 'Third person']
let personsList = []

for (let i = 0; i < persons.length; i++){
	let p = CreatePersonES6(persons[i])
	personsList.push(p)
}

/*
	The same but with _.each
Takes two arguments:
	List
	Callback function also named as iterator function

- Iterates over a list of elements, passing the values to the callback function

- Each invocation of iterator, the function, is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list)
*/


// _ is an object

_.each(persons, function(name) {
	personsList.push(createPersonES6(name))
})


/*
	forEach works similarly
	with different syntax
*/

persons.forEach( function(value, index, list){ return //something
})

/*
 * IMPLEMENTATION OF _.each
 */

const _ = {}

_.each = (list, callback) => {
	if (Array.isArray(list)){
		for (let i = 0; i < list.length; i++){
			callback(list[i], i, list)
		}
	} else {
		for (let key in list){
			callback(list[key], key, list)
		}
	}
}













