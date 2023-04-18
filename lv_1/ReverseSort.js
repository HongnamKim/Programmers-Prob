// https://school.programmers.co.kr/learn/courses/30/lessons/12933
// 정수 내림차순으로 배치하기

const solution = (n) => {
  n = n.toString().split("");
  n = n.sort((a, b) => b - a);
  return parseInt(n.join(""));
};

console.log(solution(118372));
