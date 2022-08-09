let arr = []

Array.isArray(arr) // true
// ------------------- //

let box = {}

box['material'] = 'cardboard'
box[0] = 'random'
box['%&'] = 'characters'
box[2 + 2] = true

box[ (function() { return 3 })() ] = false


let test = box['%&'] // It works, it's just useless



