class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Time Complexity: O(1)
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Time Complexity: O(1)
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // Time Complexity: O(1)
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // Time Complexity: O(1)
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Time Complexity: O(n)
  get(index) {
    if (!this.length || index >= this.length || index < 0) return undefined;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let current;
    let count;
    if (index < this.length / 2) {
      count = 0;
      current = this.head;
      while (current) {
        if (index === count) return current;
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (current) {
        if (index === count) return current;
        current = current.prev;
        count--;
      }
    }
  }

  // Time Complexity: O(n)
  get1(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // Time Complexity: O(n)
  set(index, value) {
    if (!this.length || index < 0 || index >= this.length) return false;
    if (index === 0) {
      this.head.val = value;
      return true;
    }
    if (index === this.length - 1) {
      this.tail.val = value;
      return true;
    }
    let current;
    let count;
    if (index < this.length / 2) {
      count = 0;
      current = this.head;
      while (current) {
        if (count === index) {
          current.val = value;
          return true;
        }
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (current) {
        if (index === count) {
          current.val = value;
          return true;
        }
        current = current.prev;
        count--;
      }
    }
  }

  // Time Complexity: O(n)
  setUsingGet(index, val) {
    if (index < 0 || index >= this.length) return false;
    else {
      let current = this.get(index);
      current.val = val;
      return true;
    }
  }

  set1(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Time Complexity: O(n) (more coplex as compare to insertUsingGet)
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    let newNode = new Node(value);

    let current;
    let count;
    let pre;

    if (index < this.length / 2) {
      count = 0;
      current = this.head;

      while (current) {
        if (count === index) {
          pre.next = newNode;
          newNode.next = current;
          current.prev = newNode;
          newNode.prev = pre;
          this.length++;
          return newNode;
        }
        pre = current;
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (current) {
        if (count === index) {
          let beforeNode = current.prev;
          beforeNode.next = newNode;
          newNode.prev = beforeNode;
          newNode.next = current;
          current.prev = newNode;
          this.length++;
          return newNode;
        }
        current = current.prev;
        count--;
      }
    }
  }

  // Time Complexity: O(n)
  insertUsingGet(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val); // 3
    let pre = this.get(index - 1); // 1 2
    let next = pre.next; // 4 => 5

    newNode.next = next; // 3 4 => 5
    newNode.prev = pre; // 3  4 => 5
    next.prev = newNode;
    pre.next = newNode; // 1 => 2  => 3 4 => 5

    this.length++;
    return true;
  }

  // Time Complexity: O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  reverse() {
    let current = this.head;
    while (current != null) {
      let nextNode = current.next;
      current.next = current.prev;
      current.prev = nextNode;
      current = nextNode;
    }
    current = this.head;
    this.head = this.tail;
    this.tail = current;
    return this;
  }
}

var list = new DoublyLinkedList();
list.push("111");
list.push("222");
list.push("333");
list.push("444");

// naive method for push with O(n) complexity
//   push(value) {
//     let newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//       this.length++;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//       let current = this.head;
//       let pre;
//       while (current.next) {
//         pre = current;
//         current = current.next;
//       }
//       current.prev = pre;
//       this.length++;
//     }
//   }

// naive method for get with O(n) complexity
// get(index) {
//     if (!this.length || index >= this.length) return undefined;
//     if (index === 0) return this.head;
//     if (index === this.length - 1) return this.tail;
//     let current = this.head;
//     let count = 0;
//     while (current) {
//       if (count === index) return current;
//       current = current.next;
//       count++;
//     }
//   }
