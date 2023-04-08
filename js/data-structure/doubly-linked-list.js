"use strict";
class Node {
  constructor(val) {
    this.pre = null;
    this.val = val;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.pre = current;
      this.tail = newNode;
      this.length++;
      return current;
    }
  }

  pop() {
    let popNode = this.tail;
    if (!this.length) {
      return undefined;
    } else if (this.length === 1) {
      return null;
    } else {
      // doubt : why does changing this.tail result in changing this.head
      this.tail = this.tail.pre;
      this.tail.next = null;
      popNode.pre = null;
      this.length--;
      return popNode;
    }
  }
  shift() {}
  unshift() {}
  get() {}
  set() {}
  insert() {}
  remove() {}
  reverse() {}
}

const list = new DoublyLinkedList();
list.push(1);
list.push(22);
list.push(333);
