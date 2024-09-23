# Performance Analysis of Object Operations

This document provides a detailed analysis of the time complexity for various operations performed on JavaScript objects.

## Operations Overview

1. **readProperty**
   - **Description**: Retrieves a property value from an object.
   - **Time Complexity**: O(1)

2. **searchKey**
   - **Description**: Checks if a key exists in the object.
   - **Time Complexity**: O(1)

3. **getValues**
   - **Description**: Retrieves all values from an object.
   - **Time Complexity**: O(n)
   - **Note**: n is the number of properties in the object.

4. **insertProperty**
   - **Description**: Inserts a new key-value pair into the object.
   - **Time Complexity**: O(1)

5. **deleteProperty**
   - **Description**: Deletes a key-value pair from an object.
   - **Time Complexity**: O(1)

6. **updateProperty**
   - **Description**: Updates the value of an existing key in an object.
   - **Time Complexity**: O(1)

7. **mergeObjects**
   - **Description**: Merges properties from the source object into the target object.
   - **Time Complexity**: O(n)
   - **Note**: n is the number of properties in the source object.

8. **cloneObject**
   - **Description**: Creates a shallow copy of an object.
   - **Time Complexity**: O(n)
   - **Note**: n is the number of properties in the object.

9. **isEmptyObject**
   - **Description**: Checks if an object has no properties.
   - **Time Complexity**: O(1)

10. **getEntries**
    - **Description**: Retrieves an array of key-value pairs from an object.
    - **Time Complexity**: O(n)

11. **filterProperties**
    - **Description**: Filters properties in an object based on a predicate function.
    - **Time Complexity**: O(n)

12. **hasOwnProperty**
    - **Description**: Checks if an object has its own property.
    - **Time Complexity**: O(1)

13. **getKeys**
    - **Description**: Retrieves an array of an object's own enumerable property names.
    - **Time Complexity**: O(n)

14. **Object.fromEntries**
    - **Description**: Converts an array of key-value pairs into an object.
    - **Time Complexity**: O(n)


- **Note**: n is the number of properties in the object.

## Summary

The operations listed above demonstrate a mix of constant time O(1) and linear time O(n) complexities, making them efficient for typical use cases with JavaScript objects. Understanding these complexities is essential for optimizing performance in applications that heavily utilize object manipulations.
