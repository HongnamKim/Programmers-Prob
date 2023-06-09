// https://school.programmers.co.kr/learn/courses/30/lessons/131705
// 삼총사

const solution = (number) => {
  let answer = 0;
  const len = number.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }
  return answer;
};

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
