// The Power of a Smile
// by Tupac Shakur
var poem = `
The power of a gun can kill
and the power of fire can burn
the power of wind can chill
and the power of a mind can learn
the power of anger can rage
inside until it tears u apart
but the power of a smile
especially yours can heal a frozen heart`;

for (let power of powers(poem)) {
	console.log(power);
}
// a gun: kill
// fire: burn
// wind: chill
// a mind: learn
// anger: rage
// smile: heal

function *powers(poem) {
		// match what's inmediately after "power of"
		var re = /(?<=power of )(?<noun>(?a: )\w+).*?(?<=can )(?<verb>\w+) /gs
		var match

		while (match = re.exec(poem)) {
			// match.groups.noun -> noun captured in regex
			// match.groups.verb -> verb captured in regex
			let {
				groups: {
					noun,
					verb
				}
			} = match;
			yield `${noun}: ${verb}`;
		}
}

/*
(?<=power of ) -> lookbehind
(?a: ) -> make the a optional
\w+ one or more word characters
*/
