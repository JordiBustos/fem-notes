/*
  In JavaScript, everything is an object. (false)
  There are some primitive values ->
  boolean, number, undefined, null, string, symbol (ECMAScript 6.1)
  and the objects (not primitives)

  What about of:
    undeclared? It's not a type but has a behavior
    null? It's a type
    function? It's not a type there are a subtype of the object type or (callable object)
    array? Another subtype of object type
*/

/*
  In JavaScript, variables don't have types, values do
*/

let v;
typeof v  // undefined -> the type of the value that's saved on the variable v

v = '1'
typeof v  // 'string'

v = 2
typeof v  // 'number'

v = true
typeof v  // 'boolean'

v = {}
typeof v  // 'object'

v = Symbol()
typeof v  // 'symbol'

typeof doesntExist // 'undefined'

v = null
typeof v  // 'object'

v = function(){}
typeof v  // 'function'

v = []
typeof v  // 'object'

v = BigInt(99999999999999999)
typeof v  // 'bigint'
