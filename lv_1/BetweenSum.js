// https://school.programmers.co.kr/learn/courses/30/lessons/12912
// 두 정수 사이의 합

const solution = (a, b) => {
  const count = Math.abs(a - b) + 1;
  return ((a + b) * count) / 2;
};
