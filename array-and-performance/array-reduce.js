// Filename: array-reduce.js

/**
 * Reduces an array to a single value by executing a reducer function on each element.
 * @param {Array} arr - The array to reduce.
 * @param {Function} reducer - The reducer function to apply to each element.
 * @param {*} initialValue - The initial value for the reduction.
 * @return {*} The reduced value.
 * Time Complexity: O(n)
 */
export function reduceArray(arr, reducer, initialValue) {
  return arr.reduce(reducer, initialValue);
}

// Example usage:
// const arr = [1, 2, 3, 4];
// const sum = reduceArray(arr, (acc, curr) => acc + curr, 0);
// console.log(sum); // 10
