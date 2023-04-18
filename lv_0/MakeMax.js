const solution = (numbers) => {
  const len = numbers.length;
  let answer = numbers[0] * numbers[1];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) {
        continue;
      }
      if (answer < numbers[i] * numbers[j]) {
        answer = numbers[i] * numbers[j];
      }
    }
  }
  return answer;
};

console.log(solution([1, 2, -3, 4, -5]));
