function partition(arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[end];
  arr[end] = temp;
  return i + 1;
}

function sort(arr, start, end) {
  if (start < end) {
    let pivot = partition(arr, start, end);
    sort(arr, start, pivot - 1);
    sort(arr, pivot + 1, end);
  }
}

function quickSort(arr) {
  sort(arr, 0, arr.length - 1);
}

const arr = [2, 6, 3, 7, 1, 11, 10];

quickSort(arr);

console.log(arr);
