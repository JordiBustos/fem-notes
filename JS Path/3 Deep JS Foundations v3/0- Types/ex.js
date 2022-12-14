// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true){
  Object.is = function ObjectIs(a, b){
    const isNegativeZero = (a) => {
      return a === 0 && (1/a) === -Infinity
    }
    
    if (Number.isNaN(a) || Number.isNaN(b)){
      // NaN it's the only value that is not equal to itself
      if (Number.isNaN(a) && Number.isNaN(b)) return true
      return false
    }


    if (isNegativeZero(a) || isNegativeZero(b)){
      return isNegativeZero(a) && isNegativeZero(b)
    }

    if (a === b) return true
    return false
  }
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
