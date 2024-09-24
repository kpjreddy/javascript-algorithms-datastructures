// Filename: array-sorting.js

/**
 * Sorts an array in ascending order.
 * @param {Array} arr - The array to sort.
 * @return {Array} The sorted array.
 * Time Complexity: O(n log n) - Sorting using built-in sort.
 */
export function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Example usage:
// const arr = [3, 1, 4, 2];
// console.log(sortArray(arr)); // [1, 2, 3, 4]
