function compareTriplets(a, b) {
  let Ascore = 0;
  let Bscore = 0;
  a.forEach((value, index) => {
    if (a[index] > b[index]) {
      Ascore += 1;
    } else if (a[index] < b[index]) {
      Bscore += 1;
    }
  });
  return [Ascore, Bscore];
}
