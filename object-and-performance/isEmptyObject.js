// Filename: isEmptyObject.js

/**
 * Checks if an object has no properties.
 * @param {Object} obj - The object to check.
 * @return {boolean} True if the object is empty, false otherwise.
 * Time Complexity: O(1)
 */
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

// Example usage:
// console.log(isEmptyObject(myObject)); // false
