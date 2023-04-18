// https://school.programmers.co.kr/learn/courses/30/lessons/132267
// 콜라 문제

const solution = (a, b, n) => {
  // a 개의 콜라로 b 개를 받음
  //n : 현재 단계에서 콜라 개수
  //remains: 교환 못하고 남은 콜라
  //answer: 교환 받은 콜라의 총 개수
  let remains = 0;
  let answer = 0;
  while (n >= a) {
    answer = answer + parseInt(n / a) * b;

    remains = n % a;
    n = parseInt(n / a) * b;
    n = n + remains;
  }
  return answer;
};

console.log(solution(3, 1, 20));
