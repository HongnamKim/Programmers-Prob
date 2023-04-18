// https://school.programmers.co.kr/learn/courses/30/lessons/12982
// 예산

const solution = (d, budget) => {
  d = d.sort((a, b) => a - b);
  let i = 0;
  while (budget >= 0) {
    budget -= d[i];
    i++;
  }
  return i - 1;
};

console.log(solution([1, 3, 2, 5, 4], 9));
