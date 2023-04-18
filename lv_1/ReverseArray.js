// https://school.programmers.co.kr/learn/courses/30/lessons/12932
// 자릿수 뒤집어 배열로 만들기

const solution = (n) => {
  n = n.toString().split("");
  n = n.reverse();
  n = n.map((elem) => parseInt(elem));
  return n;
};

console.log(solution(12345));
