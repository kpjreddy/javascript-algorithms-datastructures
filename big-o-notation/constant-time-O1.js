// Example of O(1) - Constant Time Complexity
// The operation below takes the same amount of time regardless of input size.

function sumWithFormula(n) {
  // Using the mathematical formula: n * (n + 1) / 2
  return (n * (n + 1)) / 2;
}

console.log(sumWithFormula(5)); // 1+2+3+4+5 = 15
console.log(sumWithFormula(100)); // Sum of first 100 numbers (5050)

// Another example

function getFirstElement(array) {
  return array[0]; // O(1) - constant time
}

console.log(getFirstElement([10, 20, 30, 40])); // Output: 10
