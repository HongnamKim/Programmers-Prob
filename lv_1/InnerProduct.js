// https://school.programmers.co.kr/learn/courses/30/lessons/70128
// 내적

const solution = (a, b) => {
  let answer = 0;
  a.forEach((elem, index) => {
    answer += elem * b[index];
  });
  return answer;
};

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
