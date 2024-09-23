// Filename: deleteProperty.js

/**
 * Deletes a key-value pair from an object.
 * @param {Object} obj - The object to delete from.
 * @param {string} key - The property key to delete.
 * Time Complexity: O(1)
 */
export function deleteProperty(obj, key) {
  if (key in obj) {
    delete obj[key];
  }
}

// Example usage:
// deleteProperty(myObject, "age");
// console.log(myObject);
