// Filename: hasOwnProperty.js

/**
 * Checks if an object has its own property.
 * @param {Object} obj - The object to check.
 * @param {string} key - The property key to check.
 * @return {boolean} True if the object has its own property, false otherwise.
 * Time Complexity: O(1)
 */
export function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

// Example usage:
// console.log(hasOwnProperty(myObject, "name")); // true
