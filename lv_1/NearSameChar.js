// https://school.programmers.co.kr/learn/courses/30/lessons/142086
// 가장 가까운 같은 글자

const solution = (s) => {
  s = s.split("");
  let position = {};
  let answer = [];
  s.forEach((elem, index) => {
    let letters = Object.keys(position);
    if (!letters.includes(elem)) {
      position[elem] = index;
      answer.push(-1);
    } else {
      elemPos = index - position[elem];
      answer.push(elemPos);
      position[elem] = index;
    }
  });

  return answer;
};

console.log(solution("foobar"));
