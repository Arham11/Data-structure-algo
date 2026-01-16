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
