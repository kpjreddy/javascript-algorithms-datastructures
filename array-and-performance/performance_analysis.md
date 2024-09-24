# Performance Analysis of Array Operations

This document provides a detailed performance analysis of common array operations.

## Operations Overview

1. **Access Element**
   - **Description**: Retrieves an element by its index.
   - **Time Complexity**: O(1)

2. **Insert Element (End)**
   - **Description**: Inserts an element at the end (push).
   - **Time Complexity**: O(1)

3. **Insert Element (Middle or Start)**
   - **Description**: Inserts an element at a specific index, causing reindexing.
   - **Time Complexity**: O(n)

4. **Delete Element**
   - **Description**: Deletes an element by its index, causing reindexing.
   - **Time Complexity**: O(n)

5. **Search Element**
   - **Description**: Searches for an element in the array.
   - **Time Complexity**: O(n)

6. **Sort Array**
   - **Description**: Sorts an array in ascending order.
   - **Time Complexity**: O(n log n)

7. **Push Element**
   - **Description**: Adds an element to the end of the array.
   - **Time Complexity**: O(1)

8. **Pop Element**
   - **Description**: Removes the last element from the array.
   - **Time Complexity**: O(1)

9. **Splice Array**
   - **Description**: Removes or replaces elements within the array.
   - **Time Complexity**: O(n)

10. **forEach**
    - **Description**: Iterates over each element in the array.
    - **Time Complexity**: O(n)

11. **Map**
    - **Description**: Creates a new array by applying a function to each element.
    - **Time Complexity**: O(n)

12. **Reduce**
    - **Description**: Reduces an array to a single value by applying a function to each element.
    - **Time Complexity**: O(n)

- **Note**: n is the number of properties in the array.

## Summary

- **Efficient Operations**: Access, push, and pop have constant time complexity (O(1)).
- **Costly Operations**: Insertion (except at the end), deletion, searching, and looping methods (such as map, reduce, forEach) have linear time complexity (O(n)), while sorting has O(n log n).
