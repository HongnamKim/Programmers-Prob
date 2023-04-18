const solution = (n) => {
  let answer = 0;
  for (let i = 3; i < n + 1; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        answer++;
        break;
      }
    }
  }
  return answer;
};

console.log(solution(15));
