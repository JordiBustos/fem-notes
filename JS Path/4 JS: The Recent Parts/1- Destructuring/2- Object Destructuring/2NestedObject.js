// Destructuring multiple times
var obj = {
  a: 1,
  b: {
    x: 2
  },
  c: 3,
  d: [1, 2]
};

var {
  a,
  b, // whole object
  b: {
    x: w // just x value
  },
  c,
  d: [
    q, // 1 -> position 0
    r  // 2 -> position 1
  ] = []
} = obj;

console.log(w); // 2
