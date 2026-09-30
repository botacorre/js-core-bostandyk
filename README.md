# JavaScript Core — Laboratory Work №4

- **Author:** Akbota Bostandyk (IT1-2305)
- **Repository:** https://github.com/botacorre/js-core-bostandyk

---

## Installation and tests

To install all required dependencies:
```bash
npm install
To run unit tests:
Bash
npm test
Implemented functions
unique(arr): Removes duplicate values from an array.
groupBy(arr, keyFn): Groups array elements by a calculated key.
chunk(arr, size): Splits an array into smaller sub-arrays of a specified size.
deepClone(obj): Creates a deep copy of objects, arrays, and Date instances.
memoize(fn): Caches function execution results using closures.
counter(initialValue): Creates a private counter with increment, decrement, and value retrieval operations.
Store classes
Store: Manages items containing name, price, and quantity. It supports adding, removing, finding items, and calculating the total price with private fields encapsulation.
SortedStore: Extends Store and implements method overriding using super.
Closures in my code
In this project, I implemented closures in two main functions: memoize and counter. A closure occurs when an inner function retains access to variables declared in its outer scope even after the outer function has finished executing.
In memoize, the returned inner function closes over the cache Map created in the parent scope, allowing it to retrieve previously computed results without polluting global state. In counter, the returned object methods (inc, dec, value) form closures over the private count variable. This encapsulates state safely and prevents direct external modification from outside the function.
Test results
AI Tools Used
During the development of this laboratory work, Gemini AI was utilized:
Code Templates: Assisted in structuring unit tests for Vitest and implementing edge cases.
