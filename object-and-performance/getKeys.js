// Filename: getKeys.js

/**
 * Retrieves an array of an object's own enumerable property names.
 * @param {Object} obj - The object to retrieve keys from.
 * @return {Array} An array of keys.
 * Time Complexity: O(n)
 */
export function getKeys(obj) {
  return Object.keys(obj);
}

// Example usage:
// console.log(getKeys(myObject)); // ["name", "occupation"]
