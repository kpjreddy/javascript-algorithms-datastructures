// Example of O(n) - Linear Time Complexity
// The loop runs 'n' times, where 'n' is the size of the input array.

function sumWithLoop(n) {
    let sum = 0;  // Initialize sum to 0

    // Loop through numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        sum += i; // Add each number to the sum
    }

    return sum;  // Return the total sum
}

console.log(sumWithLoop(5));  // 1+2+3+4+5 = 15
console.log(sumWithLoop(100));  // Sum of first 100 numbers(5050)

// Another example

function printAllElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // O(n) - linear time
  }
}

printAllElements([10, 20, 30, 40]);
// Output: 10, 20, 30, 40 (each printed in sequence)
