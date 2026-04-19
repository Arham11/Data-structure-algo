// data colleection
// abide by a LIFO (last in first out)
// example : collection of books, plates
// used at : managing function invocation, operations involving undo and
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Time complexity = O(1)
  push(val) {
    if (!this.first) {
      this.first = new Node(val);
      this.last = this.first;
    } else {
      let current = this.first;
      this.first = new Node(val);
      this.first.next = current;
    }
    return ++this.size;
  }

  // Time complexity = O(1)
  pop() {
    if (!this.first) return null;
    let oldfirst = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = oldfirst.next;
    }
    this.size--;
    return oldfirst.value;
  }
}

let stack = new Stack();
stack.push(111);
stack.push(222);

class Node1 {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack1 {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Time complexity = O(1)
  push(val) {
    const newNode = new Node1(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Time complexity = O(1)
  pop() {
    if (!this.head) return null;
    let poppedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.length--;
      return poppedNode;
    }

    this.head = poppedNode.next;
    poppedNode.next = null;
    this.length--;
    return poppedNode;
  }
}

const stack1 = new Stack1();
stack1.push(11);
stack1.push(22);
stack1.push(33);
stack1.push(44);
// 1 => 2 => 3 => 4 => 5
