// https://school.programmers.co.kr/learn/courses/30/lessons/147355
// 크기가 작은 부분문자열

const solution = (t, p) => {
  let answer = 0;
  const partialLength = p.length;
  for (let i = 0; i < t.length - partialLength + 1; i++) {
    const partialString = t.slice(i, i + partialLength);
    if (parseInt(partialString) <= parseInt(p)) {
      answer++;
    }
  }
  return answer;
};

console.log(solution("3141592", "271"));
