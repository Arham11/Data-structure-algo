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
}

let tree = new BinarySearchtree();
tree.insert(10);
tree.insert(5);
tree.insert(13);

tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

// bs.left = new Node(50);
// bs.right = new Node(100);

// bs.left.left = new Node(12);
// bs.left.right = new Node(27);

// bs.right.left = new Node(60);
// bs.right.right = new Node(67);
