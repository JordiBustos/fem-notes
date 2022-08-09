/*
  Type conversion = coercion

  1- ToPrimitive(hint) -> hint what we would like to have, not garanteed
                          it is a recursive algorithm

    suppose hint: 'number'
    tries (valueOf()) // if it doesn't return a primitive ->
    tries (toString()) // if it doesn't return a primitive -> throw an error

    suppose hint: 'string'
    revert order
*/

/*
    2- ToString -> takes any value and return the string representation of that value
       ToString(object):
        ToPrimitive(string) -> toString() / valueOf()
          Array:
          []                  ->   ''
          [1, 2, 3]           ->   '1, 2, 3'
          [null, undefined]   ->   ','
          [[[], [], []], []]  ->   ',,,'
          [,,,,]              ->   ',,,'

          Object
          {}                       -> "[object Object]"
          {a: 2}                   -> "[object Object]"
          {toString(){return "X"}} -> "X"

*/


/*
3- toNumber -> convert something not numeric to something numeric
    toNumber(object):
      ToPrimitive(number)

      (for [] and {} by default): valueOf(){ return this }
      [''] -> 0
      ['0'] -> 0
      ['-0'] -> -0
      [null] -> 0 because null -> '' and '' -> 0
      [undefined] -> 0
      [1, 2, 3] -> NaN
      [[[[]]]] -> 0

    ''      -> 0
    '0'     -> 0
    '-0'    -> -0
    '009'   -> 9
    '3'     -> 3
    '.'     -> NaN
    '0xaf'  -> 175

    false     -> 0
    true      -> 1
    null      -> 0
    undefined -> NaN
*/


/*
4- toBoolean -> equal as the other ones
   is the value falsy or truthy -> checks if value is false and if not return true

   Falsy values:
    '', 0, -0, null, NaN, false, undefined
*/
