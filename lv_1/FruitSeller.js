const solution = (_, m, score) => {
  let answer = 0;
  const remain = score.length % m;

  score.sort((a, b) => a - b);
  score.splice(0, remain);
  console.log(score);
  for (let i = 0; i < score.length; i += m) {
    answer += score[i] * m;
  }
  return answer;
};

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
