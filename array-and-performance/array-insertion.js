// Filename: array-insertion.js

/**
 * Inserts an element at a specific index in an array.
 * @param {Array} arr - The array to insert an element into.
 * @param {*} element - The element to insert.
 * @param {Number} index - The index at which to insert the element.
 * Time Complexity: O(n) - Inserting at any index except the end requires reindexing.
 */
export function insertElementAt(arr, element, index) {
  arr.splice(index, 0, element);
}

// Example usage:
// const arr = [1, 2, 4];
// insertElementAt(arr, 3, 2);
// console.log(arr); // [1, 2, 3, 4]
