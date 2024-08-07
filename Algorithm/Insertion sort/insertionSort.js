function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([5, 8, 6, 3, 1, 7]));
