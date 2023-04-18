// https://school.programmers.co.kr/learn/courses/30/lessons/12931
// 자릿수 더하기

function solution(n) {
  let answer = 0;

  const order = parseInt(Math.log10(n));

  for (let i = order; i > -1; i--) {
    const currOrder = parseInt(n / 10 ** i);
    answer += currOrder;
    n = n - currOrder * 10 ** i;
  }

  return answer;
}

console.log(solution(123));
