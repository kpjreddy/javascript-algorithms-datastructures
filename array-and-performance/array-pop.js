// Filename: array-pop.js

/**
 * Removes the last element from an array.
 * @param {Array} arr - The array to remove the last element from.
 * Time Complexity: O(1) - Constant time for removing the last element.
 * @return {*} The element that was removed.
 */
export function popElement(arr) {
  return arr.pop();
}

// Example usage:
// const arr = [1, 2, 3, 4];
// console.log(popElement(arr)); // 4
// console.log(arr); // [1, 2, 3]
