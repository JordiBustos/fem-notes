// * -> indicates generator
// produces iterators
function *main() {
  yield 1;
  yield 2;
  yield 3;
  return 4; // don't do this because line 17
}

var it = main();

it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: 4, done: true }

[...main()];
// [1,2,3]
