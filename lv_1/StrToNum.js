// https://school.programmers.co.kr/learn/courses/30/lessons/12925
// 문자열을 정수로 바꾸기

const solution = (s) => {
  const neg = s[0] === "-" ? true : false;
  if (neg) {
    s = parseInt(s.replace("-", "")) * -1;
    return s;
  } else {
    return parseInt(s);
  }
};

console.log(solution("-1234"));
