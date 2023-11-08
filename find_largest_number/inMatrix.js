let source = [
  [1, 2, 4],
  [3, 10, 8],
  [5, 9, 6],
];

function largestInMatrix(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > result) {
        result = arr[i][j];
      }
    }
  }
  return result;
}

console.log(largestInMatrix(source)); // 10

function largestInMatrixRecursive(arr) {
  let result = 0;
  if (Number.isInteger(arr)) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (result > largestInMatrixRecursive(arr[i])) {
        return result;
      } else {
        result = largestInMatrixRecursive(arr[i]);
      }
    }
    return result;
  }
}

console.log(largestInMatrixRecursive(source)); // 10
