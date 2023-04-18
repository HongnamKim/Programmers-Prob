// https://school.programmers.co.kr/learn/courses/30/lessons/12910
// 나누어 떨어지는 숫자 배열

const solution = (arr, divisor) => {
  let divider = [];
  arr.forEach((elem) => {
    if (elem % divisor === 0) {
      divider.push(elem);
    }
  });
  if (divider.length === 0) {
    divider.push(-1);
  } else {
    divider.sort((a, b) => a - b);
  }
  return divider;
};

console.log(solution([2, 36, 1, 3], 1));
