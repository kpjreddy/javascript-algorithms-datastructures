// Example of O(log n) - Logarithmic Time Complexity
// Binary search reduces the size of the input by half each step.

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
      const mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      return mid; // O(log n) - logarithmic time
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // Output: 3
