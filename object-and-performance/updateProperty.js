// Filename: updateProperty.js

/**
 * Updates the value of an existing key in an object.
 * @param {Object} obj - The object to update.
 * @param {string} key - The property key to update.
 * @param {*} newValue - The new value to assign to the property.
 * Time Complexity: O(1)
 */
export function updateProperty(obj, key, newValue) {
  if (key in obj) {
    obj[key] = newValue;
  }
}

// Example usage:
// updateProperty(myObject, "occupation", "Senior Developer");
// console.log(myObject);
