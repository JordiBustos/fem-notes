// Iteration
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  return total;
}

sum([0, 1, 2, 3, 4]); // 10

// Recursive

function sumRecursive(numbers) {
  // base case
  if (numbers.length === 1) {
    return numbers[0]
  }
  // recursive case
  return numbers[0] + sumRecursive(numbers.slice(1))
}

sumRecursive([0, 1, 2, 3, 4]); // 10
