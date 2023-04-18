// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 가운데 글자 가져오기

const solution = (s) => {
  if (s.length % 2 === 0) {
    return s.substr(s.length / 2 - 1, 2);
  } else {
    return s.substr(Math.ceil(s.length / 2) - 1, 1);
  }
};

console.log(solution("abcde"));
