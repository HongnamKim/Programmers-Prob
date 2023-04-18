// https://school.programmers.co.kr/learn/courses/30/lessons/12947
// 하샤드 수

const solution = (x) => {
  let nums = x.toString().split("");
  nums = nums.map((elem) => parseInt(elem));
  const divider = nums.reduce((acc, curr) => acc + curr, 0);
  if (x % divider === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(solution(12));
