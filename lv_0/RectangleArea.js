// https://school.programmers.co.kr/learn/courses/30/lessons/120860
// 직사각형 넓이 구하기

const solution = (dots) => {
  dots.sort((a, b) => a[0] - b[0]);
  const vertical = Math.abs(dots[0][1] - dots[1][1]);
  const horizontal = Math.abs(dots[0][0] - dots[2][0]);
  return vertical * horizontal;
};

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
