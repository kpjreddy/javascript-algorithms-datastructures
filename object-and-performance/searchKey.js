// Filename: searchKey.js

/**
 * Checks if a key exists in the object.
 * @param {Object} obj - The object to search.
 * @param {string} key - The property key to check.
 * @return {boolean} True if the key exists, false otherwise.
 * Time Complexity: O(1)
 */
export function searchKey(obj, key) {
  return key in obj;
}

// Example usage:
// console.log(searchKey(myObject, "age")); // true
