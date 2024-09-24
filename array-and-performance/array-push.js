// Filename: array-push.js

/**
 * Pushes an element to the end of an array.
 * @param {Array} arr - The array to insert an element into.
 * @param {*} element - The element to insert.
 * Time Complexity: O(1) - Constant time for pushing at the end.
 */
export function pushElement(arr, element) {
  arr.push(element);
}

// Example usage:
// const arr = [1, 2, 3];
// pushElement(arr, 4);
// console.log(arr); // [1, 2, 3, 4]
