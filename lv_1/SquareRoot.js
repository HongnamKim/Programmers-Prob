// https://school.programmers.co.kr/learn/courses/30/lessons/12934
// 정수 제곱근 판별

const solution = (n) => {
  if (parseInt(n ** 0.5) ** 2 === n) {
    return (n ** 0.5 + 1) ** 2;
  } else {
    return -1;
  }
};

console.log(solution(3));
