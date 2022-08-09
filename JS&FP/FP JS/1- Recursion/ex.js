function iterativeFactorial(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}

// Implement iterativeFactorial with recursion

function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n-1);
}

// --------------------------------------

// Implement iterativeFibonacci
function iterativeFibonacci(n) {
  if (n < 0 || typeof n != 'number') return 'n must be integer'

  if (n === 1) return 1
  if (n === 0) return 0

  let fibo = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i-2] + fibo[i-1]
  }
  return fibo[fibo.length-1]
}

// Implement recursiveFibonacci

function recursiveFibonacci(n) {
  if (n < 0 || typeof n != 'number') return 'n must be integer'

  if (n === 1) return 1
  if (n === 0) return 0

  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

/*
  The problem with recursiveFibonacci is that it makes the same computation twice because there are two recursive calls
  and the call stack it's unefficient. Stack Overflow error with big n due to the execution context.
  Look about TLDR (tailed recursive functions) & tail call optimization.
*/
