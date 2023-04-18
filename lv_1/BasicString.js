// https://school.programmers.co.kr/learn/courses/30/lessons/12918
// 문자열 다루기 기본

const solution = (s) => {
  s = s.split("");

  if (s.length === 4 || s.length === 6) {
  } else {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      return false;
    }
  }
  return true;
};

console.log(solution("a123"));
