let source = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 27],
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
  [
    [19, 20, 21],
    [22, 23, 24],
    [40, 26, 9],
  ],
];

function largestInCube(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        if (arr[i][j][k] > result) {
          result = arr[i][j][k];
        }
      }
    }
  }

  return result;
}

console.log(largestInCube(source)); // 40
