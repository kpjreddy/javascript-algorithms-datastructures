// Filename: insertProperty.js

/**
 * Inserts a new key-value pair into the object.
 * @param {Object} obj - The object to insert into.
 * @param {string} key - The property key to insert.
 * @param {*} value - The value to assign to the property.
 * Time Complexity: O(1)
 */
export function insertProperty(obj, key, value) {
  obj[key] = value;
}

// Example usage:
// insertProperty(myObject, "occupation", "Developer");
// console.log(myObject);
