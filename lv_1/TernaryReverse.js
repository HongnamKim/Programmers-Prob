// https://school.programmers.co.kr/learn/courses/30/lessons/68935
// 3진법 뒤집기

const solution = (n) => {
  const ternary = parseInt(n.toString(3).split("").reverse().join(""), 3);
  return ternary;
};

console.log(solution(45));
