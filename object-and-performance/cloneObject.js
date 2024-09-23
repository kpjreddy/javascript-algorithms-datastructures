// Filename: cloneObject.js

/**
 * Creates a shallow copy of an object.
 * @param {Object} obj - The object to clone.
 * @return {Object} A new object that is a shallow copy of the original.
 * Time Complexity: O(n)
 */
export function cloneObject(obj) {
  return { ...obj };
}

// Example usage:
// const clonedObject = cloneObject(myObject);
// console.log(clonedObject);
