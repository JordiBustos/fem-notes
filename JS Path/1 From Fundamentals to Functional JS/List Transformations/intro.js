// NESTING

const game = {}

game['suspects'] = []

/*
   const game = {
	'suspects': []
   }
*/

game.suspects.push({
	name:'Rusty',
	color:'Orange'
})

/*
	game = {
		'suspects':[
			{
				name:'Rusty',
				color:'Orange'
			}
		]
	}
*/

game.suspects[1] = {
	name:'Jane Doe',
	color:'red'
}

game['suspects'] // returns arr

// ------------------- //
// Destructure this nested data structure into two vraiables with the strings 'red' and 'orange'

const [color1, color2] = [game.suspects[0].color, game.suspects[1].color]

const [{color: firstColor}, {color: secondColor}] = game.suspects


