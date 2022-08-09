var arr = [ {a: 1}, {a: 2} ];

arr.find(function match(v) {
  return v && v.a > 1;
});
// { a:2 }

arr.find(function match(v) {
  return v && v.a > 10;
});
// undefined

arr.findIndex(function match(v) {
  return v && v.a > 10;
});
// -1

/*
  find:
    takes in a cb and if return true/false for every element
    stops at the first true

    cons: undefined value or undefined returned because it wasn't encountered are indistinguishable :(

  findIndex:
    return numeric index of first match, -1 means not found
*/
