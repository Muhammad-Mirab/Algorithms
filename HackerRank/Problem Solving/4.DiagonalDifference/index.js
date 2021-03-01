function diagonalDifference(arr) {
  let maxL = arr[0].length - 1;
  let one = 0;
  let two = 0;
  for (let i = 0; i <= maxL; i++) {
    one = one + arr[i][i];
  }
  for (let i = maxL; i >= 0; i--) {
    two = two + arr[maxL - i][i];
  }
  return Math.abs(one - two);
}
