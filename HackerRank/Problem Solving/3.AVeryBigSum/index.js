function aVeryBigSum(ar = [1, 2, 3, 4]) {
  let resolve = 0;
  ar.forEach((value) => {
    resolve += value;
  });
  return resolve;
}
