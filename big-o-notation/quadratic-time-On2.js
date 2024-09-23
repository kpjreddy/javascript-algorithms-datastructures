// Example of O(n^2) - Quadratic Time Complexity
// Nested loops lead to an operation running 'n^2' times.

function printAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]); // O(n^2) - quadratic time
    }
  }
}

printAllPairs([1, 2, 3]);
// Output: (1,1), (1,2), (1,3), (2,1), (2,2), (2,3), etc.
