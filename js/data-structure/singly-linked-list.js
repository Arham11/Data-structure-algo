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
  // push(val) {
  //   let newNode = new Node(val);
  //   if (!this.head) {
  //     // the head and tail are referencing to same node
  //     // hence changes in any of them will reflect each other
  //     this.head = newNode;
  //     this.tail = newNode;
  //   } else {
  //     // the next node in head will also change
  //     // refer this for more details https://stackoverflow.com/questions/64476223/linkedlist-push-method-in-javascript-with-a-tail
  // doubt: dont know how head is getting mutated after 2nd item is pushed i.e on 3rd item
  //     this.tail.next = newNode;
  //     // re assinging tail with latest push item
  //     this.tail = newNode;
  //   }
  //   this.length++;
  //   return this;
  // }
  push(val) {
    // define an item to be pushed
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      // define current item
      let current = this.head;
      // loop over existing head item to find the last nexted item
      // find null, if found null in next head node
      while (current.next) {
        // push the new item inside
        current = current.next;
      }
      current.next = newNode;
      this.tail = newNode;
    }
    // increement lenght

    this.length++;
    // return list
    return list;
  }

  // hi => deepika => arham => !
  //        pre      current
  pop() {
    if (!this.head) {
      return undefined;
    } else {
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
  }

  shift() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return list;
  }

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
    return list;
  }

  get(index) {
    if (!this.head || index >= this.length || index < 0) return null;
    let count = 0;
    let pre = this.head;
    if (index === 0) {
      return this.head;
    } else {
      while (count < index && pre) {
        pre = pre.next;
        count++;
      }
      debugger;
      return pre;
    }
  }
  set(newVal, index) {
    if (!this.head || index > this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    current.val = newVal;
    return current;
  }
  // doubt : not able to get how list is getting mutated
  insert(index, val) {
    if (index === 0) return list.unshift(val);
    if (index === this.length) return list.push(val);
    if (index < 0 || index > this.length) return false;
    console.log(list);
    let pre = this.get(index - 1);
    console.log(pre, "--pre");
    const newNode = new Node(val);
    const temp = pre.next;
    pre.next = newNode;
    newNode.next = temp;
    this.length++;
  }
  // doubt : not able to get how list is getting mutated
  remove(index) {
    if (index === 0) return list.shift();
    if (index === this.length) return list.pop();
    if (index > this.length) return false;

    let current = this.get(index - 1);
    current.next = current.next.next;
    this.length--;
    return current;
  }
  reverse1() {
    // swap value for head and tail
    [this.tail, this.head] = [this.head, this.tail];
    console.log(this.tail, "---tail", this.head, "---head");
    // define next variable to store next value of tail
    let next;
    // define prev variable to store previous value of head
    let pre = this.head;
    // define current = this.tail
    let node = this.head;
    // loop over each item
    while (this.tail.next) {
      debugger;
      // save the next item of current in next temporary;
      next = this.tail.next;
      this.tail = this.tail.next;

      this.tail.next = pre;
      // point current to prev
      // point next to tail.next
      // set prev value to next key of next
      current.next = next;
    }
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  // important
  reverse() {
    // swap value for head and tail
    console.log(this.tail, "---tail", this.head, "---head");
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
}
// const first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("its");
// first.next.next.next = new Node("Arham");
// first.next.next.next.next = new Node("Deepika");

const list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(205);
list.push(350);
list.push(999);

list.print();
