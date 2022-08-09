let person = []

person.name = 'Jane Doe' // Add property to array like arr.length

let p = person.name

console.log(p) // Jane Doe

//---------------//


typeof person === 'array'  // False 'cause it's Object
typeof person === 'object' // True arrays are objects with some methods

//----Bracket Notation----//

person[0] = 'Some random person'

person['name'] = 'Change name'

let s = 'name'

person[s] = 'Name changed'        // Equivalents
person.s = 'Name Changed again'   // ""


