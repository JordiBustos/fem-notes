/*
  == vs ===

  When the type matches there is no difference
  between == or ===

  == Abstract equality comparison. let x, y some values
    The algorithm works as follow
    1- if Type(x) is the same as Type(y):
          return x === y
    2- if x is null and y is undefined return true
    3- if x is undefined and y is undefined return true
    4- If Type(x) is Number and Type(y) is String:
          return the result of x == !ToNumber(y)
    5- Viceversa
    6- If Type(x) is Boolean
          return !ToNumber(x) == y
    7- Viceversa
    8 If x is a primitive and y is an object
          return x == ToPrimitive(y)
    9- Viceversa
    10 Return false

    Prefers Number()
    Corner cases:

      1- [] == ![]
      Algorithm:
        [] == false
        '' == false
        0 == false
        0 === 0 true

      2- [] != []
         !([] == [])
         !(false)
         true

---------------------------------------

  === Strict Equality Comparison
      1- if Type(x) is different from Type(y), return false
      2- if Type(x) is Number then:
            a- if x is NaN return false
            b- if y is NaN return false
            c- if x is the same Number value as y, return true
            d- if x is +0 and y is -0 return true
            e- if x is -0 and y is 0 return true
            f- Return true
      3- Return SameValueNonNumber(x, y)
*/

/*
  it performs identity comparisons
  if a and b points to literally the same object reference
  then returns true because the identity would be the same
*/

let a = {name: 'name'}
let b = {name: 'name'}

a == b    // false
a === b   // false

let c = b

c == b     // true
c === b    // true


/*
  Knowing types is always better than not knowing
  == is not about comparisons with unknown types
  == is about comparisons with known type(s), optionally where conversions are helpful

  If the types are not know we use === to avoid uncertainty
*/
