function heapify(arr, size, index) {
  let largest = index;
  let left = index * 2 + 1;
  let right = index * 2 + 2;

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapify(arr, size, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

const arr = [11, 12, 5, 1, 10, 9, 8, 7];
heapSort(arr);

console.log("Sorted array:", arr);
