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

const values = new BinaryHeapTreeMax();
values.insert(10);
values.insert(44);
values.insert(26);
values.insert(5);

values.insert(19);
values.insert(63);
values.insert(11);
values.insert(56);
values.insert(91);

const heap1 = new BinaryHeapTreeMax();

heap1.insert(52);
heap1.insert(50);
heap1.insert(55);
heap1.insert(51);
heap1.insert(56);
heap1.insert(60);
