var obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key] // [key, this[key]] to return tuple with key and value
    }
  }
};

[...obj];
// [1,2,3]
