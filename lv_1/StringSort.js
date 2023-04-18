// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// 문자열 내 마음대로 정렬하기

const solution = (strings, n) => {
  const sortedStrings = strings.sort((a, b) => {
    let value = a[n].charCodeAt() - b[n].charCodeAt();
    if (value === 0) {
      for (let i = 0; i < a.length; i++) {
        value = a[i].charCodeAt() - b[i].charCodeAt();
        if (value !== 0) {
          break;
        }
      }
    }
    return value;
  });
  console.log(sortedStrings);
  return sortedStrings;
};

console.log(solution(["abce", "abcd", "cdx"], 1));
