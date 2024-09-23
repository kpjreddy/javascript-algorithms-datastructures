// Filename: index.js

import myObject from './myObject.js';
import { readProperty } from './readProperty.js';
import { searchKey } from './searchKey.js';
import { getValues } from './getValues.js';
import { insertProperty } from './insertProperty.js';
import { deleteProperty } from './deleteProperty.js';
import { updateProperty } from './updateProperty.js';
import { mergeObjects } from './mergeObjects.js';
import { cloneObject } from './cloneObject.js';
import { isEmptyObject } from './isEmptyObject.js';
import { getEntries } from './getEntries.js';
import { filterProperties } from './filterProperties.js';
import { hasOwnProperty } from './hasOwnProperty.js';
import { getKeys } from './getKeys.js';
import { fromEntries } from './fromEntries.js';

// Example usage of various object operations
console.log('Name:', readProperty(myObject, 'name'));
console.log("Key 'age' exists:", searchKey(myObject, 'age'));
console.log('Values:', getValues(myObject));

// Inserting a new property
insertProperty(myObject, 'occupation', 'Developer');
console.log('After insertion:', myObject);

// Deleting a property
deleteProperty(myObject, 'age');
console.log('After deletion:', myObject);

// Updating a property
updateProperty(myObject, 'occupation', 'Senior Developer');
console.log('After update:', myObject);

// Merging objects
const newObject = { location: 'Bangalore', skill: 'JavaScript' };
mergeObjects(myObject, newObject);
console.log('After merging:', myObject);

// Cloning the object
const clonedObject = cloneObject(myObject);
console.log('Cloned object:', clonedObject);

// Checking if the object is empty
console.log('Is myObject empty?', isEmptyObject(myObject));

// Getting entries of the object
console.log('Entries:', getEntries(myObject));

// Filtering properties
const filtered = filterProperties(
  myObject,
  (value) => typeof value === 'string'
);
console.log('Filtered properties:', filtered);

// Checking if the object has its own property
console.log("Has 'name' property?", hasOwnProperty(myObject, 'name'));

// Getting keys
console.log('Keys:', getKeys(myObject));

// Example usage of fromEntries
const entries = [
  ['name', 'Reddy'],
  ['age', 30],
];
const newObj = fromEntries(entries);
console.log('New object from entries:', newObj); // { name: 'Reddy', age: 30 }
