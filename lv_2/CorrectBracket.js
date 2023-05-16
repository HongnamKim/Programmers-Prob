// https://school.programmers.co.kr/learn/courses/30/lessons/12909
// 올바른 괄호

s = "(())()";

const solution = (s) => {
  let stack = 0;
  for (const char of s) {
    stack += char == "(" ? 1 : -1;
    if (stack < 0) {
      return false;
    }
  }
  return stack == 0 ? true : false;
};

console.log(solution(s));

/*
const solution = (s) => {
  let stack = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack++;
    } else {
      if (stack == 0) {
        return false;
      } else {
        stack--;
      }
    }
    if (stack > s.length - i) {
      return false;
    }
  }
  if (stack != 0) {
    return false;
  }
  return true;
};
*/
