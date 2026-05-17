# Data Structures and Algorithms (JavaScript)

This repository is a practice space for learning:
- Core data structures (Linked List, Stack, Queue, Hash Table, BST, Heap, Graph)
- Common algorithm patterns (Recursion, Sliding Window, Multiple Pointer, Frequency Counter, Searching, Sorting)

The code is written to help with interview preparation and concept revision.

## Project Structure

- `index.html` -> entry page
- `css/style.css` -> styles
- `js/index.js` -> extra BST practice code
- `js/algorithms/` -> algorithm pattern files
- `js/data-structure/` -> data structure implementations
- `__test__/` -> test area (if used)

## How To Run

You can run this as a simple static project.

1. Open `index.html` in a browser.
2. Open browser DevTools Console to see outputs from the JS files.

Optional local server:
- VS Code Live Server extension
- or any static server command, for example:

```bash
npx serve .
```

## Suggested Learning Order

1. Recursion and problem solving basics
2. Linked Lists -> Stack -> Queue
3. Hash Tables
4. Trees (BST) -> Heaps
5. Graph basics
6. Sorting and Searching

---

## Revision: Binary Search Tree Methods

File: `js/data-structure/binary-search-tree.js`

### Class Overview

- `Node`
  - `constructor(val)`
  - Stores `value`, `left`, and `right`.

- `BinarySearchTree`
  - `constructor()`
  - Initializes `root = null` and `size = 0`.

### Method-by-Method Revision

1. `insert(value)`
- Purpose: Add a value at correct BST position.
- Logic:
  - If tree is empty, set root.
  - Otherwise traverse left or right until empty child is found.
  - Reject duplicate values.
- Time: Average O(log n), Worst O(n) for skewed tree.

2. `find(value)`
- Purpose: Return node matching the value.
- Logic:
  - Start at root.
  - Move right if value is bigger, left if smaller.
  - Stop when found or `null`.
- Time: Average O(log n), Worst O(n).

3. `remove(value)`
- Purpose: Delete a node iteratively.
- Cases handled:
  - 0 child
  - 1 child
  - 2 children (uses minimum node from right subtree)
- Time: Average O(log n), Worst O(n).

4. `findSecondLargest()`
- Purpose: Return second largest value in BST.
- Logic:
  - Go to the right-most node.
  - If that node has left subtree, second largest is max of that left subtree.
  - Otherwise parent is second largest.
- Time: O(h), where h is tree height.

5. `deleteNodeUsingRecursion(value)`
- Purpose: Public wrapper to delete using recursion.
- Logic: `this.root = this.delete(this.root, value)`.

6. `delete(root, value)`
- Purpose: Recursive delete helper.
- Cases:
  - No child -> return `null`
  - One child -> return that child
  - Two children -> link left subtree under minimum node in right subtree, return right subtree root
- Time: O(h).

7. `maxheight()`
- Purpose: Find maximum depth/height of tree.
- Logic: DFS recursion, `1 + max(leftHeight, rightHeight)`.
- Time: O(n), Space: O(h).

8. `isBalanced()`
- Purpose: Check whether tree is height-balanced.
- Logic:
  - Post-order DFS
  - Return `-1` if any subtree is unbalanced
  - Otherwise return subtree height
- Time: O(n), Space: O(h).

9. `BFT()`
- Purpose: Breadth-first traversal (level order).
- Logic: Queue-based traversal from root.
- Output: Array of values in level order.
- Time: O(n), Space: O(n).

10. `DFTPreorder()`
- Order: Root -> Left -> Right
- Time: O(n)

11. `DFTPostorder()`
- Order: Left -> Right -> Root
- Time: O(n)

12. `DFTInorder()`
- Order: Left -> Root -> Right
- In BST this produces sorted order.
- Time: O(n)

### Quick BST Interview Prompts (Revision Practice)

- Why is inorder traversal sorted in a BST?
- How do you delete a node with 2 children?
- What changes in complexity when BST becomes skewed?
- Difference between BFS and DFS use-cases?
- How does `isBalanced()` avoid repeated height calculations?

---

## Full Revision Checklist (All Class/Method Names Found)

### Data Structures

- `js/data-structure/singly-linked-list.js`
  - `push`, `pop`, `shift`, `unshift`, `get`, `set`, `set1`, `setusingGet`, `insert`, `insertUsingGet`, `remove`, `removeUsingGet`, `reverse`, `print`

- `js/data-structure/doubly-linked-list.js`
  - `push`, `pop`, `shift`, `unshift`, `get`, `get1`, `set`, `setUsingGet`, `set1`, `insert`, `insertUsingGet`, `remove`, `reverse`

- `js/data-structure/stacks.js`
  - `Stack`: `push`, `pop`
  - `Stack1`: `push`, `pop`

- `js/data-structure/queue.js`
  - `enqueue`, `dequeue`

- `js/data-structure/hash-tables.js`
  - `naiveHash`, `hash`, `Hashtables._hash`, `set`, `get`, `keys`, `values`

- `js/data-structure/graphs.js`
  - `addVertex`, `addEdge`, `removeEdge`, `removeVertex`

- `js/data-structure/binary-heap-tree.js`
  - `BinaryHeapTreeMax`: `insert`, `bubbleUp`, `extractMax`, `swap`, `sinkDown`
  - `PriorityQueue`: `insert`, `bubbleUp`, `swap`, `extractMax`, `sinkDown`

- `js/data-structure/binary-search-tree.js`
  - `insert`, `find`, `remove`, `findSecondLargest`, `deleteNodeUsingRecursion`, `delete`, `maxheight`, `isBalanced`, `BFT`, `DFTPreorder`, `DFTPostorder`, `DFTInorder`

### Algorithms (named functions captured)

- `js/algorithms/recursion.js`
  - `power`, `palindromeUsingPureRecursion`, `rangeOfNumbers`

- `js/algorithms/sorting-algorithm.js`
  - `sameFrequency`, `pivot`, `getDigit`, `digitCount`, `mostDigit`

- `js/algorithms/frequency-counter.js`
  - `areThereDuplicates`

### Extra Practice File

- `js/index.js`
  - `BST.insert`, `BST.find`, `BST.deleteNodeUsingRecursion`, `BST.delete`, `BST.isBalanced`

---

## How To Revise Efficiently (30-45 min)

1. Pick one data structure.
2. For each method, answer:
   - What is the input/output?
   - What is average/worst time complexity?
   - What edge case can break it?
3. Dry-run one example on paper.
4. Re-code from memory without looking.
5. Compare with file implementation and fix mistakes.

If you want, the next step can be a second README section with complexity tables for each method and a weekly revision schedule.
