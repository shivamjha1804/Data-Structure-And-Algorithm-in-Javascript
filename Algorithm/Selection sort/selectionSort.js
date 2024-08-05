function findMinimum(arr, ind) {
  let minInd = ind;

  for (let i = ind + 1; i < arr.length; i++) {
    if (arr[i] < arr[minInd]) {
      minInd = i;
    }
  }

  return minInd;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minInd = findMinimum(arr, i);

    if (arr[minInd] !== arr[i]) {
      let temp = arr[i];
      arr[i] = arr[minInd];
      arr[minInd] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([11, 8, 9, 3, 5, 2]));
