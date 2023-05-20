// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 숫자의 표현

const solution = (n) => {
  let result = 1;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    const check = 2 * n + i * (i - 1);
    const j = Math.floor(Math.sqrt(2 * n + i * (i - 1)));
    if (j * (j + 1) == check) {
      result++;
    }
  }
  return result;
};

const n = 15;

console.log(solution(n));

/*

1 2 3 4 5
a_1 = a, a_n = a + (n-1), sum = (2a + (n-1)) * n = 2input
2a*n + n^2 - n = 2input
n^2 + (2a - 1) * n - 2input = 0

n = 1 - 2a (+/-) sqrt(4a^2 - 4a - 1 + 8input) } / 2

14
14
13
14
10


*/
