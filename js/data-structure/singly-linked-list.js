class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Time Complexity: O(1)
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      // the head and tail are referencing to same node
      // hence changes in any of them will reflect each other
      this.head = newNode;
      this.tail = newNode;
    } else {
      // the next node in head will also change
      // refer this for more details https://stackoverflow.com/questions/64476223/linkedlist-push-method-in-javascript-with-a-tail
      this.tail.next = newNode;
      // re assinging tail with latest push item
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Time Complexity: O(n)
  pop() {
    if (!this.head) return undefined;
    // define pre
    let current = this.head;
    let pre = this.head;
    // loop over each object to find the last child object
    while (current.next) {
      pre = current;
      current = current.next;
    }
    // console.log(pre, "-- pre");
    this.tail = pre;
    this.tail.next = null; // pop last child object
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // Time Complexity: O(1)
  shift() {
    if (!this.head) return undefined;
    let removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return removedNode;
  }

  // Time Complexity: O(1)
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // Time Complexity: O(n)
  get(index) {
    if (!this.head || index >= this.length || index < 0) return null;
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current;
      }
      current = current.next;
      count++;
    }

    // using for loop
    // for (let i = 0; i < index; i++) {
    //   current = current.next;
    // }
    // return current;
  }

  // Time Complexity: O(n)
  set(newVal, index) {
    if (!this.head || index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    current.val = newVal;
    return current;
  }

  // Time Complexity: O(n)
  set1(index, val) {
    if (!this.head || index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        current.val = val;
        if (count === this.length - 1) this.tail.val = val;
        return current.val;
      }
      current = current.next;
      count++;
    }
  }

  // set using get
  // Time Complexity: O(n)
  setusingGet(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  // Time Complexity: O(n)
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let current = this.head;
    let pre = null;
    let count = 0;

    while (current) {
      if (count === index) {
        pre.next = newNode;
        newNode.next = current;
        this.length++;
        return true;
      }
      pre = current;
      current = current.next;
      count++;
    }
    return true;
  }

  // Time Complexity: O(n)
  insertUsingGet(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let pre = this.get(index - 1);
    const newNode = new Node(val);
    const temp = pre.next;
    pre.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // Time Complexity: O(n)
  remove(index) {
    if (!this.head || index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let current = this.head;
    let pre = null;
    let count = 0;
    while (current) {
      if (count === index) {
        pre.next = current.next;
        current.next = null; // detached the node
        this.length--;
        return current;
      }
      pre = current;
      current = current.next;
      count++;
    }
  }

  // Time Complexity: O(n)
  removeUsingGet(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let pre = this.get(index - 1);
    let removed = pre.next;
    pre.next = removed.next;
    removed.next = null;
    this.length--;
    return removed;
  }

  // Time Complexity: O(n)
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let pre = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = pre;
      pre = node;
      node = next;
    }
    return this;
  }

  // Time Complexity: O(n)
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}
// const first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("its");
// first.next.next.next = new Node("Arham");
// first.next.next.next.next = new Node("Chowdhry");

const sl = new SinglyLinkedList();
sl.push(55);
sl.push(44);
sl.push(33);
sl.push(22);
sl.push(11);

sl.print();
