function staircase(n) {
  let arr = [];
  for (let i = n - 1; i >= 0; i--) {
    arr[n - i] = " ".repeat(i);
  }
  for (let i = 1; i <= n; i++) {
    arr[i] = arr[i] + "#".repeat(i);
  }
  let currectarr = arr.filter((value) => {
    if (value === undefined) {
      return false;
    }
    return true;
  });
  let string = "";
  currectarr.forEach((value, index) => {
    string = `${string}${index > 0 ? "\n" : ""}${value}`;
  });
  console.log(string);
}
