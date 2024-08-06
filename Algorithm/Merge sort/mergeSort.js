function merge(leftArr, rightArr) {
  let rightIndex = 0;
  let leftIndex = 0;
  let newArrPointer = 0;
  let mergedArr = new Array(leftIndex + rightIndex);

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr[newArrPointer++] = leftArr[leftIndex++];
    } else {
      mergedArr[newArrPointer++] = rightArr[rightIndex++];
    }
  }

  while (leftIndex < leftArr.length) {
    mergedArr[newArrPointer++] = leftArr[leftIndex++];
  }
  while (rightIndex < rightArr.length) {
    mergedArr[newArrPointer++] = rightArr[rightIndex++];
  }
  return mergedArr;
}

function breakArray(arr, start, end) {
  if (start == end) {
    return [arr[start]];
  }
  const mid = Math.floor((start + end) / 2);

  const left = breakArray(arr, start, mid);
  const right = breakArray(arr, mid + 1, end);

  return merge(left, right);
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  return breakArray(arr, 0, arr.length - 1);
}

const arr = [1, 8, 9, 11, 10, 13];

console.log(mergeSort(arr));
