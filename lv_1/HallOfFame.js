// https://school.programmers.co.kr/learn/courses/30/lessons/138477
// 명예의 전당(1)

const solution = (k, score) => {
  let answer = [];
  let hall = [];
  for (let i = 0; i < score.length; i++) {
    hall.push(score[i]);
    hall.sort((a, b) => a - b);
    // 명예의 전당 길이가 k 를 넘기면 가장 작은 점수 제거
    if (hall.length > k) hall.shift();
    answer.push(hall[0]);
  }
  return answer;
};

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
