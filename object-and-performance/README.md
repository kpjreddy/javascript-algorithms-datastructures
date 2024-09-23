# Object and Performance

In this folder, I've focused on various operations related to JavaScript objects, with an emphasis on performance analysis. Each operation includes detailed comments explaining the functionality and time complexity.

## Table of Contents
- [Overview](#overview)
- [Object Operations](#object-operations)
- [Performance Analysis](#performance-analysis)
- [Usage](#usage)

## Overview
This project aims to deepen understanding of JavaScript objects and their performance characteristics. The following operations are implemented:

## Object Operations
- `readProperty`: Retrieves a property value from an object.
- `searchKey`: Checks if a key exists in the object.
- `getValues`: Retrieves all values from an object.
- `insertProperty`: Inserts a new key-value pair into the object.
- `deleteProperty`: Deletes a key-value pair from an object.
- `updateProperty`: Updates the value of an existing key in an object.
- `mergeObjects`: Merges properties from one object into another.
- `cloneObject`: Creates a shallow copy of an object.
- `isEmptyObject`: Checks if an object has no properties.
- `getEntries`: Returns an array of key-value pairs from an object.
- `filterProperties`: Filters properties based on a predicate function.
- `hasOwnProperty`: Checks if an object has its own property.
- `getKeys`: Returns an array of an object's own enumerable property names.
- `fromEntries`: Converts an array of key-value pairs into an object.

## Performance Analysis
Refer to `performance_analysis.md` for a detailed analysis of the time complexity for each operation.

## Usage
To use these functions, import them into your JavaScript file and call the appropriate function with the necessary parameters.

Example:
```javascript
import { readProperty } from './readProperty.js';
console.log(readProperty(myObject, 'name'));
