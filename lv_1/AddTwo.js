// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 두 개 뽑아서 더하기

const solution = (numbers) => {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(answer)].sort((a, b) => a - b);
  return answer;
};

console.log(solution([2, 1, 3, 4, 1]));
