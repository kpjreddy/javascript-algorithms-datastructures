// Filename: readProperty.js

/**
 * Retrieves a property value from an object.
 * @param {Object} obj - The object to read from.
 * @param {string} key - The property key to retrieve.
 * @return {*} The value of the property or null if not found.
 * Time Complexity: O(1)
 */
export function readProperty(obj, key) {
  return obj[key] !== undefined ? obj[key] : null;
}

// Example usage:
// const value = readProperty(myObject, "name");
// console.log(value);
