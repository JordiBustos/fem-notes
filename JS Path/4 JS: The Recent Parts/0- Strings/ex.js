function upper(strings,...values) {
	/*
	strings = ['Hello ', ' (@', '), welcome to ', '!']
	values = ['kyle', 'getify', 'JS Pecent Parts']
	*/
	var str = '';

	for (let i = 0; i < strings.length; i++) {
		// strings is always greather than values at least by one
		// so we need to add the value in the second iteration
		if (i > 0) {
			str += String(values[i-1].toUpperCase());
		}
		str += strings[i];
	}
	return str
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
