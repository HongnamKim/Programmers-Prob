// https://school.programmers.co.kr/learn/courses/30/lessons/136798
// 기사단원의 무기
const solution = (number, limit, power) => {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let divider = countDivider(i);
    if (divider > limit) {
      result += power;
    } else {
      result += divider;
    }
  }

  return result;
};

const number = 10;
const limit = 3;
const power = 2;

console.log(solution(number, limit, power));

function countDivider(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      count += 1;
    } else if (n % i === 0) {
      count += 2;
    }
  }
  return count;
}
