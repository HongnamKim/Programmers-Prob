// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 피보나치 수

function solution(n) {
  let cache = [0, 1];
  for (let i = 2; i <= n; i++) {
    cache.push(((cache[i - 1] % 1234567) + (cache[i - 2] % 1234567)) % 1234567);
  }
  return cache[n];
}

console.log(solution(100));
