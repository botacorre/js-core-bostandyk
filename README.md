# Lab 4: JS Core

**Author:** Akbota Bostandyk (IT1-2305)  
**Repository:** https://github.com/botacorre/js-core-bostandyk

---

## 1. How to Run Tests

To install dependencies and run the Vitest test suite, use the following commands:

```bash
npm install
npm test

## 2. Implemented Features
Core Functions
unique(arr): Removes duplicate values from an array. It returns [] for non-array inputs.
groupBy(arr, keyFn): Groups items by a dynamically calculated key. It returns {} for invalid inputs.
chunk(arr, size): Divides an array into smaller chunks of a specific size. It returns [] if the size is <= 0.
deepClone(obj): Creates a deep copy of objects, arrays, and Dates, safely cloning nested references.
memoize(fn): Caches function execution results using closures, returning cached results on repeated arguments.
counter(): A factory function that creates a private counter and encapsulates state securely.
