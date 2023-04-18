const solution = (arr1, arr2) => {
  let answer = [];
  arr1.forEach((elem, i) => {
    let rowSum = [];
    elem.forEach((elem2, j) => {
      rowSum.push(elem2 + arr2[i][j]);
    });
    answer.push(rowSum);
  });
  return answer;
};

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
