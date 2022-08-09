function data(tmp = {}, x) {
  var {
    a,
    b
  } = tmp;
  return [a, b];
}
data( {a: 1, b: 2}, 42 );

// better approach
function dataBetter({
  a,
  b
} = {}, x) {
  //...
  return [a, b];
}
dataBetter( {a: 1, b: 2}, 42 );
