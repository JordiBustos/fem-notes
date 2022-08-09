const abc = (a, b, c) => {
	return [a, b, c]
}

let curried = ._curry(abc)

curried(1)(2)(3) // => [1, 2, 3]

curried(1, 2)(3) // => [1, 2, 3]
