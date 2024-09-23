// Filename: mergeObjects.js

/**
 * Merges properties from the source object into the target object.
 * @param {Object} target - The target object to merge into.
 * @param {Object} source - The source object to merge from.
 * Time Complexity: O(n)
 */
export function mergeObjects(target, source) {
  Object.assign(target, source);
}

// Example usage:
// const newObject = { location: "Bangalore", skill: "JavaScript" };
// mergeObjects(myObject, newObject);
// console.log(myObject);
