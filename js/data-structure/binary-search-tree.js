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

  deleteNodeUsingRecursion(value) {
    this.root = this.delete(this.root, value);
  }

  delete(root, value) {
    if (!root) return null;

    if (root.value === value) {
      // if no child
      // if exactly one child
      // if two child
      console.log(root);
      // no child
      if (root.left === null && root.right === null) return null;
      if (root.left !== null && root.right !== null) {
        debugger;
        // this a complicated edge case that we can't solve right away
        //
        // we could pick the root.left node, but what if (root.left.right !== null)? where
        // are we going to attach our root.right subtree without overwriting any existing
        // reference?
        //
        // also, we could pick the root.right node, but what if (root.right.left !== null) too?
        //
        // so, these are our two possible (and equivalent) options:
        //      1) pick our root.right node as the root node, and find the minimum node in
        //         the right subtree that has no left pointer, and assign the root.left node to it.
        //
        //      2) pick our root.left node as the root node, and find the maximum node in
        //         the left subtree that has no right pointer, and assign the root.right node to it.
        //
        // here's an example of deleting node with val=5 without breaking the BST choosing option (1)
        //
        //                  5                     8
        //               /     \                 / \
        //              3*      8               7   9
        //             / \     / \    --->     /
        //            2   4   7   9           6
        //                   /               /
        //                  6               3*
        //                                 / \
        //                                2   4
        //
        // we'll choose option (1) and we'll find the minimum number in the right subtree that
        // has no left pointer
        // that one is going to be the node that will link to the left subtree of the current
        // -soon to be deleted- node. by doing that we'll preserve the structure of the BST
        // (nodes to the left of a node should be smaller, and numbers to the
        // right should be greater).
        let curr = root.right;
        while (curr.left) {
          curr = curr.left;
        }
        curr.left = root.left;
        return root.right;
      }
      // one child at left
      if (root.left) {
        return root.left;
      }
      // one child at right
      if (root.right) {
        return root.right;
      }
    } else if (value > root.value) {
      root.right = this.delete(root.right, value);
      console.log(root.right);
    } else {
      root.left = this.delete(root.left, value);
    }

    return root;
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
