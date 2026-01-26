class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      this.size++;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val > current.value) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            this.size++;
            return this;
          }
        } else {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            this.size++;
            return this;
          }
        }
      }
    }
  }

  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) return;

    let current = this.root;
    let parent = null;

    while (current.right) {
      parent = current;
      current = current.right;
    }

    if (current.left) {
      current = current.left;
      while (current.right) current = current.right;
      return current.value;
    }

    return parent.value;
  }

  isBalanced(node = this.root) {
    if (node === null) {
      return;
    }
    return maxDepth(node) - minDepth(node) <= 1;

    function minDepth(node) {
      if (node === null) {
        return 0;
      }
      return 1 + Math.min(minDepth(node.left), minDepth(node.right));
    }

    function maxDepth(node) {
      if (node === null) {
        return 0;
      }
      return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
    }
  }
}
let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(6);
tree.insert(19);

tree.insert(4);
tree.insert(8);
tree.insert(17);
tree.insert(14);
tree.insert(18);

tree.insert(43);
tree.insert(5);
tree.insert(7);

// tree.insert(10);
tree.insert(31);

tree.insert(49);
tree.insert(28);
tree.insert(33);
tree.insert(56);
tree.insert(20);
tree.insert(27);

//                10
//       5                13
//    2    7       11             16
//                   12        15    17
//                           14

/*
  // Helper method to find the minimum node in a subtree
  findMinNode(node) {
    // Loop down to find the leftmost leaf node
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Public remove method to be called by the user
  delete(value) {
    // Call the recursive removeNode function and update the root
    this.root = this.removeNode(this.root, value);
  }

  // Recursive helper function to remove a node with a given value
  removeNode(node, value) {
    // Base case: if the tree is empty or the value is not found
    if (node === null) {
      return null;
    }

    // Traverse the tree to find the node
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // Node to be deleted is found

      // Case 1: Node has no children (leaf node)
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // Case 2: Node has one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Case 3: Node has two children
      // Find the in-order successor (smallest node in the right subtree)
      let temp = this.findMinNode(node.right);
      // Replace the current node's value with the successor's value
      node.value = temp.value;
      // Recursively delete the in-order successor from the right subtree
      debugger;
      node.right = this.removeNode(node.right, temp.value);
      return node;
    }
}
  
*/

// function abc(arr, index = 0) {
//   // base condition
//   if (index === arr.length) return;
//   console.log(arr[index]);
//   index++;
//   abc(arr, index);
// }

// abc([1, 2, 3, 4]);
