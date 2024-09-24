// Filename: array-search.js

/**
 * Searches for an element in the array.
 * @param {Array} arr - The array to search in.
 * @param {*} element - The element to search for.
 * @return {Boolean} True if the element is found, otherwise false.
 * Time Complexity: O(n) - Linear search.
 */
export function searchElement(arr, element) {
  return arr.includes(element);
}

// Example usage:
// const arr = [1, 2, 3, 4];
// console.log(searchElement(arr, 3)); // true
