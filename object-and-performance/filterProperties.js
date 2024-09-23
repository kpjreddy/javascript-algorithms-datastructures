// Filename: filterProperties.js

/**
 * Filters properties in an object based on a predicate function.
 * @param {Object} obj - The object to filter.
 * @param {Function} predicate - The function to test each property.
 * @return {Object} A new object with filtered properties.
 * Time Complexity: O(n)
 */
export function filterProperties(obj, predicate) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => predicate(value))
  );
}

// Example usage:
// const filtered = filterProperties(myObject, (value) => typeof value === 'string');
// console.log(filtered);
