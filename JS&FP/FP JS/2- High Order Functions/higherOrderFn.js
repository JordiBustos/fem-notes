/*
  First-class functions:
    Can be passed around as values (like callbacks).

  Higher-order functions:
    Take other functions as input or output.

  Replace loops with higher-order functions like map, reduce or filter
*/

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*** FILTER ***/

// var evens = numbers.filter(isEven);
// var odds = numbers.filter(isOdd);
// var greaterThanFour = numbers.filter(isGreaterThanFour)
// var primes = numbers.filter(isPrime);

function isEven(n) {
  return n % 2 == 0;
}

function isOdd(n) {
  return n % 2 != 0;
}

function isGreaterThanFour(n) {
  return n > 4
}

function isPrime(n) {
  if ((n <= 1) || ((n != 2) && (n % 2 == 0))) return false;

  const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const possibleFactors = wholes.filter(checkDivisors);
  const factors = possibleFactors.filter(findFactors);

  return (factors.length == 0) ? true : false

  function checkDivisors(m) {
    return (m > 1 && m < n);
  }
  function findFactors(m) {
    return (n % m == 0);
  }
}

/*** MAP ***/

// if n is divisible by 3 and 5 return fizzBuzz
// if n is divisible by 3 return fizz
// if n is divisible by 5 return buzz
// return n
var fizzBuzz = mapImplementation(n => {
      return ((n % 3 == 0) && (n % 5 == 0)) ? 'fizzBuzz' : ((n % 3 == 0) ? 'fizz' : ((n % 5 == 0) ? 'buzz' : n));
    }, numbers);

function mapImplementation(cb, arr) {
  if (arr.length == 0) return [];
  return [cb(arr[0])].concat(mapImplementation(cb, arr.slice(1)));
}

/*** REDUCE ***/
var sum = numbers.reduce(
  (acc, value) => {
      return acc + value
  },
  0
);

var max = numbers.reduce(
  (acc, value) => {
    return value > acc ? value : acc;
  },
  -Infinity
);
