// https://school.programmers.co.kr/learn/courses/30/lessons/12951
// JadenCase 문자열 만들기

const solution = (s) => {
  s = s.toLowerCase();
  console.log(s);
  s = s.split("");
  let toUpper = true;
  const converted = s.map((c) => {
    if (c == " ") {
      toUpper = true;
      return c;
    } else if (toUpper) {
      toUpper = false;
      return c.toUpperCase();
    } else {
      return c;
    }
  });
  return converted.join("");
};

const s = "3people unFollowed me";

console.log(solution(s));
