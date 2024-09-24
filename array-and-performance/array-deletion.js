// Filename: array-deletion.js

/**
 * Deletes an element from the array by its index.
 * @param {Array} arr - The array to delete an element from.
 * @param {Number} index - The index of the element to delete.
 * Time Complexity: O(n) - Reindexing occurs after deletion.
 */
export function deleteElement(arr, index) {
  arr.splice(index, 1);
}

// Example usage:
// const arr = [1, 2, 3, 4];
// deleteElement(arr, 1);
// console.log(arr); // [1, 3, 4]
