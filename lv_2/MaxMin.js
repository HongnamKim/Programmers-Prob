const solution = (s) => {
  s = s.split(" ").sort((a, b) => a - b);
  let answer = [];
  answer.push(s[0]);
  answer.push(s[s.length - 1]);

  return answer.join(" ");
};

console.log(solution("-1 -2 -3 -4"));
