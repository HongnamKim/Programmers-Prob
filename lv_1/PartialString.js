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
