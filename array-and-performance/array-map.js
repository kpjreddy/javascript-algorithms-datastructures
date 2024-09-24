// Filename: array-map.js

/**
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
 * @param {Array} arr - The array to map.
 * @param {Function} callback - The function to apply to each element.
 * @return {Array} A new array with each element transformed by the callback.
 * Time Complexity: O(n)
 */
export function mapArray(arr, callback) {
  return arr.map(callback);
}

// Example usage:
// const arr = [1, 2, 3];
// console.log(mapArray(arr, x => x * 2)); // [2, 4, 6]
