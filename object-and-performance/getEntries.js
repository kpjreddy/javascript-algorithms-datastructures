// Filename: getEntries.js

/**
 * Retrieves an array of key-value pairs from an object.
 * @param {Object} obj - The object to retrieve entries from.
 * @return {Array} An array of key-value pairs.
 * Time Complexity: O(n)
 */
export function getEntries(obj) {
  return Object.entries(obj);
}

// Example usage:
// console.log(getEntries(myObject));
