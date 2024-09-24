// Filename: array-foreach.js

/**
 * Executes a provided function once for each array element.
 * @param {Array} arr - The array to iterate over.
 * @param {Function} callback - The function to execute on each element.
 * Time Complexity: O(n)
 */
export function forEachElement(arr, callback) {
  arr.forEach(callback);
}

// Example usage:
// const arr = [1, 2, 3];
// forEachElement(arr, element => console.log(element)); // 1, 2, 3
