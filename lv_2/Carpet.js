// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// 카펫

const solution = (brown, yellow) => {
  const total = brown + yellow;

  for (let i = 3; i <= Math.sqrt(total); i++) {
    if (total % i === 0) {
      const row = total / i;
      const column = i;
      const center = (row - 2) * (column - 2);
      if (yellow === center) {
        return [row, column];
      }
    }
  }
};

const brown = 10;
const yellow = 2;

console.log(solution(brown, yellow));
