function data([
  first = 10,
  second = 20,
  third = 30,
  ...fourth = []
] = []) {
  // Destructuring args && fallback value if no data is passed
}

// -------------------------------

function returnData() {
  return null;
}

var tmp = returnData(); // || [] -> fallback value
var first = tmp[0] // Type Error
var two = tmp[1]
//--------------------------------

var [
  first,
  two
] = returnData() || [];
