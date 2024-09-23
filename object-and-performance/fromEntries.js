// Filename: fromEntries.js

/**
 * Converts an array of key-value pairs into an object.
 * @param {Array} entries - An array of key-value pairs.
 * @return {Object} A new object created from the provided entries.
 * Time Complexity: O(n)
 * Note: n is the number of entries in the array.
 */
export function fromEntries(entries) {
  return Object.fromEntries(entries);
}

// Example usage:
const entries = [
  ['name', 'Reddy'],
  ['age', 30],
];
const newObj = fromEntries(entries);
console.log(newObj); // { name: 'Reddy', age: 30 }
