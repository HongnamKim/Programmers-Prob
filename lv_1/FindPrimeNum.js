// https://school.programmers.co.kr/learn/courses/30/lessons/12921
// 소수 찾기

const solution = (n) => {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      answer++;
    }
  }
  return answer;
};

console.log(solution(10));

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
