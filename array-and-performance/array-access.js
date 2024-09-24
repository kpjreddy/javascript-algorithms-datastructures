// Filename: array-access.js

/**
 * Accesses an element in an array by its index.
 * @param {Array} arr - The array to access an element from.
 * @param {Number} index - The index of the element to access.
 * @return {*} The element at the given index.
 * Time Complexity: O(1)
 */
export function accessElement(arr, index) {
  return arr[index];
}

// Example usage:
// const arr = [1, 2, 3, 4];
// console.log(accessElement(arr, 2)); // 3
