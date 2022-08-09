// objects doesn't have built in iterators
var obj = {
  a: 1,
  b: 2,
  c: 3,
  // implementation
  [Symbol.iterator]: function() {
    var keys = Object.keys(this);
    var idx = 0;
    return {
            // we use arrow function because we need the this keyword to lexical adopt parent context.
            // if we use a regular declaration a new this context would be created
      next: () => (idx < keys.length) ?
                    { done: false, value: this[keys[idx++]] } :
                    { done: true, value: undefined }
    }
  }
};

[...obj]
// [1, 2, 3]
//
/*
for (let v of obj) {
  console.log(v);
}
// TypeError, tries to execute undefined
*/
