class MinimumHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  insert(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;
    this.upHeap(index);
  }

  upHeap(index) {
    const parentIndex = this.getParentIndex(index);
    if (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.upHeap(parentIndex);
    }
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.downHeap(0);
    return min;
  }

  downHeap(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let smallest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallest]
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallest]
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      this.swap(smallest, index);
      this.downHeap(smallest);
    }
  }

  checkSize() {
    return this.heap.length;
  }

  minElement() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  printHeap() {
    console.log(this.heap);
  }

  checkHeight() {
    return this.heap.length === 0 ? 0 : Math.floor(Math.log2(this.heap.length));
  }

  printTree() {
    const height = Math.ceil(Math.log2(this.heap.length + 1));
    let level = 0;
    let index = 0;

    while (index < this.heap.length) {
      const levelSize = Math.pow(2, level);
      const spaces = Math.pow(2, height - level) - 1;
      const betweenSpaces = Math.pow(2, height - level + 1) - 1;
      let line = " ".repeat(spaces);

      for (let i = 0; i < levelSize && index < this.heap.length; i++) {
        line += this.heap[index++];
        if (i < levelSize - 1) {
          line += " ".repeat(betweenSpaces);
        }
      }

      console.log(line);
      level++;
    }
  }
}

const minHeap = new MinimumHeap();
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);
minHeap.insert(15);
minHeap.insert(30);
minHeap.insert(25);
minHeap.insert(40);
minHeap.insert(35);
minHeap.insert(45);

minHeap.printHeap();
minHeap.printTree();
console.log(minHeap.checkHeight());

console.log(minHeap.checkSize());
console.log(minHeap.minElement());
console.log(minHeap.extractMin());
