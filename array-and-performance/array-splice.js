// Filename: array-splice.js

/**
 * Removes elements from an array and, optionally, inserts new elements in their place.
 * @param {Array} arr - The array to modify.
 * @param {Number} start - The index at which to start changing the array.
 * @param {Number} deleteCount - The number of elements to remove.
 * @param {...*} [items] - The elements to add to the array, if any.
 * Time Complexity: O(n)
 */
export function spliceArray(arr, start, deleteCount, ...items) {
  arr.splice(start, deleteCount, ...items);
}

// Example usage:
// const arr = [1, 2, 3, 4, 5];
// spliceArray(arr, 1, 2, 'a', 'b');
// console.log(arr); // [1, 'a', 'b', 4, 5]
