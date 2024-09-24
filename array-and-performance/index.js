// Filename: index.js

import { accessElement } from './array-access.js';
import { insertElementAt } from './array-insertion.js';
import { deleteElement } from './array-deletion.js';
import { searchElement } from './array-search.js';
import { sortArray } from './array-sorting.js';
import { pushElement } from './array-push.js';
import { popElement } from './array-pop.js';
import { spliceArray } from './array-splice.js';
import { forEachElement } from './array-foreach.js';
import { mapArray } from './array-map.js';
import { reduceArray } from './array-reduce.js';

// Array for demonstration purposes
const demoArray = [3, 1, 4, 1, 5];

// Access element
console.log('Access element:', accessElement(demoArray, 2)); // 4

// Insert element at index
insertElementAt(demoArray, 2, 1);
console.log('After insertion:', demoArray); // [3, 2, 1, 4, 1, 5]

// Delete element
deleteElement(demoArray, 1);
console.log('After deletion:', demoArray); // [3, 1, 4, 1, 5]

// Search for element
console.log('Search for 4:', searchElement(demoArray, 4)); // true

// Sort array
console.log('Sorted array:', sortArray([...demoArray])); // [1, 1, 3, 4, 5]

// Push element
pushElement(demoArray, 9);
console.log('After push:', demoArray); // [3, 1, 4, 1, 5, 9]

// Pop element
console.log('Popped element:', popElement(demoArray)); // 9
console.log('After pop:', demoArray); // [3, 1, 4, 1, 5]

// Splice array
spliceArray(demoArray, 2, 1, 'a', 'b');
console.log('After splice:', demoArray); // [3, 1, 'a', 'b', 1, 5]

// forEach iteration
forEachElement(demoArray, (element) =>
  console.log('forEach element:', element)
);

// Map operation
const mappedArray = mapArray(demoArray, (x) => x + 1);
console.log('Mapped array:', mappedArray); // ['4', '2', 'b', 'c', '2', '6']

// Reduce operation
const sum = reduceArray([1, 2, 3, 4], (acc, curr) => acc + curr, 0);
console.log('Reduced sum:', sum); // 10
