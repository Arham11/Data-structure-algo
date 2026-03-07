# DSA Cheatsheet — Quick Revision Guide

---

## Table of Contents

1. [Big O Complexity](#big-o-complexity)
2. [Problem-Solving Patterns](#problem-solving-patterns)
   - [Frequency Counter](#1-frequency-counter)
   - [Multiple Pointers](#2-multiple-pointers)
   - [Sliding Window](#3-sliding-window)
3. [Recursion](#recursion)
4. [Searching Algorithms](#searching-algorithms)
5. [Sorting Algorithms](#sorting-algorithms)
6. [Data Structures](#data-structures)
   - [Singly Linked List](#1-singly-linked-list)
   - [Doubly Linked List](#2-doubly-linked-list)
   - [Stack](#3-stack)
   - [Queue](#4-queue)
   - [Binary Search Tree](#5-binary-search-tree-bst)
   - [Binary Heap / Priority Queue](#6-binary-heap--priority-queue)

---

## Big O Complexity

| Notation   | Name         | Example                         |
| ---------- | ------------ | ------------------------------- |
| O(1)       | Constant     | Array access, hash map lookup   |
| O(log n)   | Logarithmic  | Binary search                   |
| O(n)       | Linear       | Single loop                     |
| O(n log n) | Linearithmic | Merge sort, Quick sort (avg)    |
| O(n²)      | Quadratic    | Nested loops (Bubble/Selection) |

---

## Problem-Solving Patterns

### 1. Frequency Counter

**Idea:** Use objects/maps to count frequencies and compare — avoids nested loops.

**When to use:** Comparing two collections (anagrams, squared arrays, unique occurrences).

```js
// Build a frequency map
let freq = {};
for (let val of arr) {
  freq[val] = (freq[val] || 0) + 1;
}
```

**Key problems:**
| Problem | Approach |
|---|---|
| Same squared frequency | Map arr1, loop arr2 checking `sqrt` keys |
| Valid anagram | Map both strings, compare key-value pairs |
| Unique occurrences | Map frequencies → `new Set(values).size === values.length` |
| Are there duplicates | `new Set(args).size === args.length` |

---

### 2. Multiple Pointers

**Idea:** Two pointers (start/end or slow/fast) walk toward each other or in the same direction on a **sorted** structure.

**When to use:** Sorted arrays — finding pairs, counting unique values, subsequences.

```js
let left = 0,
  right = arr.length - 1;
while (left < right) {
  let sum = arr[left] + arr[right];
  if (sum === 0) return [arr[left], arr[right]];
  else if (sum > 0) right--;
  else left++;
}
```

**Key problems:**
| Problem | Approach |
|---|---|
| Sum zero pair | Two pointers from both ends |
| Count unique values | Slow/fast pointer, count when values differ |
| Average pair | `(arr[start]+arr[end])/2` vs target |
| Is subsequence | Pointer on `find` advances only on match |

---

### 3. Sliding Window

**Idea:** Maintain a "window" of elements — slide it across the array by adding the next element and removing the first.

**When to use:** Contiguous subarray/substring problems (max sum, longest substring).

```js
// Max sum of k consecutive elements
let sum = 0;
for (let i = 0; i < k; i++) sum += arr[i]; // initial window
let max = sum;
for (let i = k; i < arr.length; i++) {
  sum += arr[i] - arr[i - k]; // slide window
  max = Math.max(max, sum);
}
```

**Key problems:**
| Problem | Approach |
|---|---|
| Max subarray sum (size k) | Slide: `sum += arr[i] - arr[i-k]` |
| Longest substring (distinct) | Expand window, shrink on duplicate |

---

## Recursion

**Two essentials:**

1. **Base case** — when to stop
2. **Different input** — each call must progress toward the base case

**Common pattern — Helper function:**

```js
function outer(input) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return; // base case
    if (condition) result.push(helperInput[0]);
    helper(helperInput.slice(1)); // recursive call
  }
  helper(input);
  return result;
}
```

**Key problems & patterns:**

| Problem                 | Key Idea                                              |
| ----------------------- | ----------------------------------------------------- |
| `factorial(n)`          | `n * factorial(n-1)`, base: `n===1 → 1`               |
| `fib(n)`                | `fib(n-1) + fib(n-2)`, base: `n<=2 → 1`               |
| `power(base, exp)`      | `base * power(base, exp-1)`, base: `exp===0 → 1`      |
| `reverse(str)`          | `str[last] + reverse(str.slice(0,-1))`                |
| `isPalindrome(str)`     | Compare first & last, recurse on `str.slice(1,-1)`    |
| `flatten(arr)`          | If item is array → `concat(flatten(item))`, else push |
| `nestedEvenSum(obj)`    | If value is object → recurse; if even number → add    |
| `capitalizeFirst(arr)`  | Capitalize `arr[0]`, concat with `recurse(rest)`      |
| `collectStrings(obj)`   | If string → push; if object → recurse                 |
| `containsVal(obj, val)` | If object → recurse; if match → true                  |
| `stringifyNumbers(obj)` | If number → `.toString()`; if object → recurse        |

---

## Searching Algorithms

### Linear Search — O(n)

```js
for (const [index, item] of arr.entries()) {
  if (item === target) return index;
}
return -1;
```

### Binary Search — O(log n)

> **Requires sorted array.** Divide and conquer.

```js
let start = 0,
  end = arr.length - 1;
while (start <= end) {
  let mid = Math.ceil((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (target < arr[mid]) end = mid - 1;
  else start = mid + 1;
}
return -1;
```

### Naive String Search — O(n × m)

```js
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < target.length; j++) {
    if (str[i + j] === target[j] && j === target.length - 1) count++;
  }
}
```

---

## Sorting Algorithms

### Comparison Summary

| Algorithm      | Best       | Average    | Worst      | Space    | Stable? |
| -------------- | ---------- | ---------- | ---------- | -------- | ------- |
| Bubble Sort    | O(n) \*    | O(n²)      | O(n²)      | O(1)     | Yes     |
| Selection Sort | O(n²)      | O(n²)      | O(n²)      | O(1)     | No      |
| Insertion Sort | O(n) \*    | O(n²)      | O(n²)      | O(1)     | Yes     |
| Merge Sort     | O(n log n) | O(n log n) | O(n log n) | O(n)     | Yes     |
| Quick Sort     | O(n log n) | O(n log n) | O(n²)      | O(log n) | No      |
| Radix Sort     | O(nk)      | O(nk)      | O(nk)      | O(n+k)   | Yes     |

\* with early termination (`noSwap` optimization)

---

### Bubble Sort

> Compare adjacent elements, swap if out of order. Largest bubbles to the end.

```js
for (let i = 0; i < a.length; i++) {
  let noSwap = true;
  for (let j = 0; j < a.length - (i + 1); j++) {
    if (a[j] > a[j + 1]) {
      [a[j], a[j + 1]] = [a[j + 1], a[j]];
      noSwap = false;
    }
  }
  if (noSwap) break; // optimization: stop early if sorted
}
```

### Selection Sort

> Find the **minimum** in each pass, swap it to the front.

```js
for (let i = 0; i < a.length; i++) {
  let min = i;
  for (let j = i + 1; j < a.length; j++) {
    if (a[j] < a[min]) min = j;
  }
  if (i !== min) [a[i], a[min]] = [a[min], a[i]];
}
```

### Insertion Sort

> Build sorted portion from left. Pick current item, insert into correct position.

```js
for (let i = 1; i < a.length; i++) {
  let current = a[i];
  let j = i - 1;
  while (j >= 0 && a[j] > current) {
    a[j + 1] = a[j];
    j--;
  }
  a[j + 1] = current;
}
```

### Merge Sort

> Split array in halves recursively, then **merge** sorted halves.

```js
// Merge two sorted arrays
function merge(arr1, arr2) {
  let results = [],
    i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) results.push(arr1[i++]);
    else results.push(arr2[j++]);
  }
  while (i < arr1.length) results.push(arr1[i++]);
  while (j < arr2.length) results.push(arr2[j++]);
  return results;
}

// Recursive split
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```

### Quick Sort

> Pick a **pivot**, partition so smaller items go left, larger go right. Recurse on both sides.

```js
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start],
    swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
```

### Radix Sort

> Non-comparison sort for **integers**. Sort by each digit position (units → tens → hundreds...).

```js
// Helper: get digit at position i
function getDigit(num, i) {
  return Math.floor((num % Math.pow(10, i + 1)) / Math.pow(10, i));
}

// Helper: count digits
function digitCount(num) {
  return num.toString().length;
}

// Helper: max digits in array
function mostDigits(arr) {
  let max = 0;
  for (let n of arr) max = Math.max(max, digitCount(n));
  return max;
}

function radixSort(arr) {
  let maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) buckets[getDigit(num, k)].push(num);
    arr = [].concat(...buckets);
  }
  return arr;
}
```

---

## Data Structures

### 1. Singly Linked List

```
[val|next] → [val|next] → [val|next] → null
 head                        tail
```

| Operation      | Time | Notes                               |
| -------------- | ---- | ----------------------------------- |
| `push(val)`    | O(1) | Add to end                          |
| `pop()`        | O(n) | Remove from end (must traverse)     |
| `shift()`      | O(1) | Remove from beginning               |
| `unshift(val)` | O(1) | Add to beginning                    |
| `get(index)`   | O(n) | Traverse to index                   |
| `set(i, val)`  | O(n) | Get node at index, update value     |
| `insert(i,v)`  | O(n) | Get prev node, rewire `.next`       |
| `remove(i)`    | O(n) | Get prev node, skip target          |
| `reverse()`    | O(n) | Swap head/tail, reverse all `.next` |

**Reverse pattern (important!):**

```js
let node = this.head;
this.head = this.tail;
this.tail = node;
let prev = null,
  next;
for (let i = 0; i < this.length; i++) {
  next = node.next;
  node.next = prev;
  prev = node;
  node = next;
}
```

---

### 2. Doubly Linked List

```
null ← [prev|val|next] ⇄ [prev|val|next] ⇄ [prev|val|next] → null
         head                                    tail
```

| Operation      | Time   | Notes                                   |
| -------------- | ------ | --------------------------------------- |
| `push(val)`    | O(1)   | Add to end, set `.prev`                 |
| `pop()`        | O(1)   | Remove from end (use `tail.prev`) ✨    |
| `shift()`      | O(1)   | Remove from beginning                   |
| `unshift(val)` | O(1)   | Add to beginning                        |
| `get(index)`   | O(n/2) | Start from head or tail (optimized!) ✨ |
| `set(i, val)`  | O(n/2) | Uses optimized `get`                    |
| `insert(i,v)`  | O(n/2) | Rewire `prev` and `next`                |
| `remove(i)`    | O(n/2) | Detach node, rewire neighbors           |

**Key difference from Singly:** `pop()` is O(1) and `get()` can start from the closer end.

---

### 3. Stack

> **LIFO** — Last In, First Out (think: stack of plates)

Uses: function call stack, undo/redo, browser history

```
push → [C] → [B] → [A] → null
        ↑ first         ↑ last
pop  ← [C]
```

| Operation | Time |
| --------- | ---- |
| `push`    | O(1) |
| `pop`     | O(1) |

```js
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let node = new Node(val);
    node.next = this.first;
    this.first = node;
    if (!this.last) this.last = node;
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let removed = this.first;
    this.first = removed.next;
    if (this.size === 1) this.last = null;
    this.size--;
    return removed.value;
  }
}
```

---

### 4. Queue

> **FIFO** — First In, First Out (think: line at a store)

Uses: task scheduling, BFS, printer queue

```
enqueue → [A] → [B] → [C] → null
           ↑ head        ↑ tail
dequeue ← [A]
```

| Operation | Time |
| --------- | ---- |
| `enqueue` | O(1) |
| `dequeue` | O(1) |

```js
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return ++this.length;
  }
  dequeue() {
    if (!this.head) return null;
    let old = this.head;
    this.head = old.next;
    if (this.length === 1) this.tail = null;
    this.length--;
    return old.value;
  }
}
```

---

### 5. Binary Search Tree (BST)

```
            11
         /      \
        6        19
       / \      /   \
      4   8    17    43
```

**Rule:** Left child < Parent < Right child

| Operation     | Avg      | Worst (unbalanced) |
| ------------- | -------- | ------------------ |
| `insert(val)` | O(log n) | O(n)               |
| `find(val)`   | O(log n) | O(n)               |
| `remove(val)` | O(log n) | O(n)               |

**Insert:**

```js
insert(value) {
  let newNode = new Node(value);
  if (!this.root) { this.root = newNode; return; }
  let current = this.root;
  while (true) {
    if (value === current.value) return undefined; // no duplicates
    if (value > current.value) {
      if (!current.right) { current.right = newNode; return; }
      current = current.right;
    } else {
      if (!current.left) { current.left = newNode; return; }
      current = current.left;
    }
  }
}
```

**Remove (3 cases):**

1. **No children** → simply remove
2. **One child** → replace with child
3. **Two children** → find in-order successor (min of right subtree), replace value

**Tree Traversal:**

| Traversal               | Order               | Use Case             |
| ----------------------- | ------------------- | -------------------- |
| **BFS** (Breadth-First) | Level by level      | Wide trees           |
| **DFS Pre-order**       | Root → Left → Right | Clone/serialize tree |
| **DFS In-order**        | Left → Root → Right | Get sorted order ✨  |
| **DFS Post-order**      | Left → Right → Root | Delete tree          |

```js
// BFS — uses a queue
BFS() {
  let queue = [this.root], data = [];
  while (queue.length) {
    let node = queue.shift();
    data.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return data;
}

// DFS Pre-order
DFSPreorder(node = this.root, data = []) {
  data.push(node.value);              // ← visit
  if (node.left) this.DFSPreorder(node.left, data);
  if (node.right) this.DFSPreorder(node.right, data);
  return data;
}

// DFS In-order (returns sorted!)
DFSInorder(node = this.root, data = []) {
  if (node.left) this.DFSInorder(node.left, data);
  data.push(node.value);              // ← visit
  if (node.right) this.DFSInorder(node.right, data);
  return data;
}

// DFS Post-order
DFSPostorder(node = this.root, data = []) {
  if (node.left) this.DFSPostorder(node.left, data);
  if (node.right) this.DFSPostorder(node.right, data);
  data.push(node.value);              // ← visit
  return data;
}
```

**Useful BST methods:**

- `maxHeight()` → recursively get `1 + Math.max(leftH, rightH)`
- `isBalanced()` → DFS returning `-1` if `|leftH - rightH| > 1`
- `findSecondLargest()` → go right until end; if last has left subtree go right in it

---

### 6. Binary Heap / Priority Queue

> **Max Heap:** Parent is always **greater** than children.
> Stored as a flat **array** — no node pointers needed!

```
Index:      0   1   2   3   4   5
Values:   [91, 56, 63, 5, 19, 26]

            91
          /    \
        56      63
       / \     /
      5  19   26
```

**Parent-child index formulas:**

- Parent of `i` → `Math.floor((i - 1) / 2)`
- Left child of `i` → `2i + 1`
- Right child of `i` → `2i + 2`

| Operation    | Time     |
| ------------ | -------- |
| `insert`     | O(log n) |
| `extractMax` | O(log n) |

**Insert (bubble up):**

```js
insert(val) {
  this.values.push(val);
  let i = this.values.length - 1;
  while (i > 0) {
    let parentIdx = Math.floor((i - 1) / 2);
    if (this.values[i] <= this.values[parentIdx]) break;
    [this.values[i], this.values[parentIdx]] =
      [this.values[parentIdx], this.values[i]];
    i = parentIdx;
  }
}
```

**Extract Max (sink down):**

```js
extractMax() {
  [this.values[0], this.values[this.values.length-1]] =
    [this.values[this.values.length-1], this.values[0]];
  let max = this.values.pop();
  // sink down index 0
  let i = 0;
  while (true) {
    let largest = i, left = 2*i+1, right = 2*i+2;
    if (left < this.values.length && this.values[left] > this.values[largest])
      largest = left;
    if (right < this.values.length && this.values[right] > this.values[largest])
      largest = right;
    if (largest === i) break;
    [this.values[i], this.values[largest]] =
      [this.values[largest], this.values[i]];
    i = largest;
  }
  return max;
}
```

**Priority Queue:** Same as Max Heap but nodes store `{ value, priority }` and comparisons use `.priority`.

---

## Quick Reference — When to Use What

| Scenario                       | Pattern / DS      |
| ------------------------------ | ----------------- |
| Comparing frequencies of items | Frequency Counter |
| Finding pairs in sorted array  | Multiple Pointers |
| Contiguous subarray/substring  | Sliding Window    |
| Nested structure processing    | Recursion         |
| Search in sorted array         | Binary Search     |
| Nearly sorted data             | Insertion Sort    |
| General purpose sort           | Merge Sort        |
| Fast insert/remove at ends     | Linked List       |
| LIFO behavior                  | Stack             |
| FIFO behavior                  | Queue             |
| Sorted data with fast lookup   | BST               |
| Get max/min quickly            | Binary Heap       |
| Task scheduling by priority    | Priority Queue    |

---

_Generated from your DSA workspace. Happy revising!_ 🚀
