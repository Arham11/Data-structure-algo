class BinaryHeapTreeMax {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentindex = Math.floor((index - 1) / 2);
      let parent = this.values[parentindex];
      if (element <= parent) break;
      this.values[parentindex] = element;
      this.values[index] = parent;
      index = parentindex;
    }
  }

  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();

    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }

  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  // sink down or heapDown
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    while (true) {
      let largest = index;

      // left value would 2n+1
      const left = 2 * index + 1;
      // left value would 2n+2
      const right = 2 * index + 2;
      if (left < length && this.values[left] > this.values[largest]) {
        largest = left;
      }
      if (right < length && this.values[right] > this.values[largest]) {
        largest = right;
      }
      if (largest === index) {
        break; // stop when values property is satisfied
      } else {
        this.swap(index, largest);
        index = largest;
      }
    }
  }
}

// [41, 39, 33, 18, 27, 12]

const heap = new BinaryHeapTreeMax();
heap.insert(10);
heap.insert(44);
heap.insert(26);
heap.insert(5);

heap.insert(19);
heap.insert(63);
heap.insert(11);
heap.insert(56);
heap.insert(91);

// PriorityQueue using binary heap tree concept

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    this.queue.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.queue.length - 1;
    const element = this.queue[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.queue[parentIndex];
      if (element.priority <= parent.priority) break;
      this.queue[parentIndex] = element;
      this.queue[index] = parent;
      index = parentIndex;
    }
  }

  swap(i, j) {
    [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
  }
  extractMax() {
    if (this.queue.length === 0) return null;
    if (this.queue.length === 1) {
      let max = this.queue.pop();
      return max;
    }
    let max = this.queue[0];
    let end = this.queue.pop();
    this.queue[0] = end;
    this.sinkDown();
    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.queue.length;
    while (true) {
      let largest = index;
      // left value would 2n+1
      const left = 2 * index + 1;
      // left value would 2n+2
      const right = 2 * index + 2;
      if (
        left < length &&
        this.queue[largest].priority < this.queue[left].priority
      ) {
        largest = left;
      }
      if (
        right < length &&
        this.queue[largest].priority < this.queue[right].priority
      ) {
        largest = right;
      }
      if (largest === index) {
        break; // stop when values property is satisfied
      } else {
        this.swap(index, largest);
        index = largest;
      }
    }
  }
}

const pq = new PriorityQueue();
pq.insert("High fever", 20);
pq.insert("fever", 10);
pq.insert("accident", 40);
pq.insert("fall from building", 45);
pq.insert("dengue", 25);
pq.insert("nothing", 8);
pq.insert("scam", 5);
