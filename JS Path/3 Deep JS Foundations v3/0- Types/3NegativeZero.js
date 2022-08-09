/*
  Necessary for IEE 754 standard
*/

let number = -0

number === -0       // true

number.toString()   // "0"

number === 0        // true
number < 0; number > 0; // false

// Added on ES6. It acts like a ==== :P
Object.is(number, -0) // true
Object.is(number, 0)  // false

/*
  Usage example of -0
  An app that keeps track of one car x < 0 -> moving to the left, x > 0 moving to the right
  if x = 0 then car stops looking to the right
  if x = -0 then car stops looking to the left
*/


function formatTrend(trendRate){
  var direction =
      (trendRate < 0 || Object.is(trendRate, -0)) ? 'down' : 'up'
  return `${direction} ${Math.abs(trendRate)}`
}

formatTrend(-3) // "down 3"
formatTrend(3)  // "up 3"
formatTrend(0)  // "up 0"
formatTrend(-0) // "down 0"


Math.sign(-3) // -1
Math.sign(3)  // 1
Math.sign(-0) // -0 ¿?
Math.sign(0)  // 0 ¿?

// "fix" Math.sign
function sign(v){
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1
}

sign(-0) // -1
sign(0)  //  1
