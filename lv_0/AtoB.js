const solution = (before, after) => {
  let answer = 1;
  before = before.split("");
  after = after.split("");
  before.reverse();

  before.forEach((elem, index) => {
    if (elem !== after[index]) {
      answer = 0;
      return;
    }
  });
  return answer;
};

console.log(solution("olleh", "hello"));
