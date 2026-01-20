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
}

let tree = new BinarySearchtree();
tree.insert(10);
tree.insert(5);
tree.insert(13);

tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
