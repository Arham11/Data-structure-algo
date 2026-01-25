class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchtree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      // assign a value of root to a temp variable current
      // if value of newNode > current
      // // check left if present reinitalize current node
      // // if left is null push the newnode value to current.left , return
      //
      // if value of newNode < current
      // // check right if present reinitalize current node
      // // if right is null push the newnode value to current.right
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        // right
        if (value > current.value) {
          if (current.right) current = current.right;
          else {
            current.right = newNode;
            this.size++;
            return this;
          }
        } else {
          if (current.left) current = current.left;
          else {
            current.left = newNode;
            this.size++;
            return this;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    while (true) {
      if (!current) return undefined;
      if (current.value === value) return current;
      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }
  remove(value) {
    // find the target
    let target = this.root;
    let parent;

    while (target.value !== value) {
      parent = target;
      if (value < target.value) {
        target = target.left;
      } else {
        target = target.right;
      }
    }
    // target node is found

    // if taget === root return null
    if (target === this.root) return undefined;

    //// if target has 0 child
    if (target.right === null && target.left === null) {
      if (parent.left === target) parent.left = null;
      else parent.right = null;
    }
    //// if target has 2 child
    else if (target.left !== null && target.right !== null) {
      let minimumParent = target;
      let minimum = target.right;

      // if the target has no left which means no minimum needs to be found
      if (minimum.left === null) {
        minimum.left = target.left;
        if (parent.left === target) {
          parent.left = minimum;
        } else {
          parent.right = minimum;
        }
      }
      // if the left exist , hence need to find the minimum
      else {
        while (minimum.left !== null) {
          minimumParent = minimum;
          minimum = minimum.left;
        }
        if (parent.left === target) {
          parent.left.value = minimum.value;
        } else {
          parent.right.value = minimum.value;
        }

        if (minimum.right) {
          minimumParent.left = minimum.right;
        }
      }
    }
    //// if target has 1 child (at left)
    //// if target has 1 child (at right)
    else {
      if (parent.left === target) {
        // delete the target and point whater target left or right is present
        parent.left = target.right || target.left;
      } else {
        parent.right = target.right || target.left;
      }
    }

    return target;
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
}

let tree = new BinarySearchtree();
tree.insert(10);
tree.insert(5);
tree.insert(13);

tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

// remove(value) {
//   // find the node
//   /// if node is not found return undefined
//   // node found
//   //// if node does not have ay child
//   //// set its parent.left || parent.right as null
//   //
//   //// if node has one child, that child should replace the deleted node
//   //// if node has two child, any of the child should replace the deletd node.
//   if (!this.root) return undefined;

//   let current = this.root;
//   let pre = this.root;

//   while (true) {
//     if (!current) return undefined;
//     let right = false;
//     if (value === current.value) {
//       let successorLeft = current.left;
//       let successorRight = current.right;

//       if (!successorLeft && !successorRight) {
//         if (pre.left.value === value) {
//           pre.left = null;
//         } else {
//           pre.right = null;
//         }
//         return;
//       }
//       if (successorLeft && !successorRight) {
//         right ? (pre.right = successorLeft) : (pre.left = successorLeft);
//         return;
//       }
//       if (successorRight && !successorLeft) {
//         right ? (pre.right = successorLeft) : (pre.left = successorLeft);
//         return;
//       }

//       if (successorLeft && successorRight) {
//         if (right) {
//           pre.right = successorRight;
//           successorRight.left = successorLeft;
//         } else {
//           pre.left = successorLeft;
//           successorLeft.right = successorRight;
//         }
//         return;
//       }

//       this.size--;
//     }
//     if (value > current.value) {
//       pre = current;
//       right = true;

//       current = current.right;
//     } else {
//       pre = current;
//       right = false;
//       current = current.left;
//     }
//   }
// }
