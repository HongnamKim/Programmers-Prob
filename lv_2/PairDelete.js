// https://school.programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기

const solution = (s) => {
  s = s.split("");
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
};

const s = "cdcdee";

console.log(solution(s));
