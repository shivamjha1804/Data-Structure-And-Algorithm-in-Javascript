class MaximumHeap {
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

  insert(num) {
    this.heap.push(num);
    let index = this.heap.length - 1;
    this.upHeap(index);
  }

  upHeap(index) {
    const parentIndex = this.getParentIndex(index);
    if (index > 0 && this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index);
      this.upHeap(parentIndex);
    }
  }

  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const maxElement = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.downHeap(0);
    return maxElement;
  }

  downHeap(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let largest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largest]
    ) {
      largest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largest]
    ) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      this.swap(largest, index);
      this.downHeap(largest);
    }
  }

  checkSize() {
    return this.heap.length;
  }

  maxElement() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  printHeap() {
    console.log(this.heap);
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

const maxHeap = new MaximumHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(15);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.insert(25);
maxHeap.insert(40);
maxHeap.insert(35);
maxHeap.insert(45);
maxHeap.insert(50);

maxHeap.printHeap();
maxHeap.printTree();

console.log(maxHeap.checkSize());
console.log(maxHeap.maxElement());
console.log(maxHeap.extractMax());
