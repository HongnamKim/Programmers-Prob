// https://school.programmers.co.kr/learn/courses/30/lessons/12916
// 문자열 내 p와 y의 개수

const solution = (s) => {
  s = s.split("");
  let numOfP = 0;
  let numOfY = 0;
  s.forEach((elem) => {
    elem = elem.toLowerCase();
    if (elem === "p") {
      numOfP++;
    } else if (elem === "y") {
      numOfY++;
    }
  });
  if (numOfP === numOfY) {
    return true;
  } else {
    return false;
  }
};

console.log(solution("pPoooyY"));
