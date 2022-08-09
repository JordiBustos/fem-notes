var str = 'Hello';

for (
  let it = str[Symbol.iterator](), v, result;
  (result = it.next()) && !result.done
  && (v = result.value || true)
) {
  console.log(v);
}

// H e l l o

// ES6 Better approach:

var it = str[Symbol.iterator]();

for (let v of it) {
  console.log(v);
}

for (let v of str) {
  console.log(v);
}

// Both -> H e l l o

var letters = [...str];
console.log(letters);
// ['H', 'e', 'l', 'l', 'o']
