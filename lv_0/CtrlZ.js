const solution = (s) => {
  s = s.split(" ");

  s.forEach((elem, index) => {
    if (elem === "Z") {
      s[index - 1] = 0;
      s[index] = 0;
    } else {
      s[index] = parseInt(s[index]);
    }
  });
  const answer = s.reduce((acc, curr) => acc + curr, 0);
  return answer;
};

console.log(solution("1 2 Z 3"));
