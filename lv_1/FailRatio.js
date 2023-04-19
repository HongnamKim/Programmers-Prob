// https://school.programmers.co.kr/learn/courses/30/lessons/42889
// 실패율

const solution = (N, stages) => {
  stages.sort((a, b) => a - b);

  let numerator = getNumerator(N, stages);
  let denominator = getDenominator(N, stages);

  const failRatio = numerator.map((elem, index) => [
    index + 1,
    elem / denominator[index],
  ]);

  failRatio.sort((a, b) => b[1] - a[1]);
  return failRatio.map((elem) => elem[0]);
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

function getNumerator(N, stages) {
  let numerator = new Array(N + 1).fill(0);

  let currentStage = stages[0];
  let currentStageIndex = currentStage - 1;

  for (let i = 0; i < stages.length; i++) {
    if (currentStage === stages[i]) {
      numerator[currentStageIndex] += 1;
    } else {
      currentStageIndex = stages[i] - 1;
      currentStage = stages[i];
      numerator[currentStageIndex] += 1;
    }
  }

  return numerator.slice(0, N);
}

function getDenominator(N, stages) {
  let denominator = new Array(N + 2).fill(0);

  // 각 단계별 정체된 사람
  for (let i = 0; i < stages.length; i++) {
    denominator[stages[i]] += 1;
  }
  // 각 단계별 누적 정체된 사람
  for (let i = 1; i < denominator.length; i++) {
    denominator[i] = denominator[i] + denominator[i - 1];
  }
  denominator = denominator.slice(0, N);
  // 각 단계별 도전한 사람
  for (let i = 0; i < denominator.length; i++) {
    denominator[i] = stages.length - denominator[i];
  }

  return denominator;
}

/*
테스트 1  〉	통과 (0.28ms, 32.7MB)
테스트 2  〉	통과 (0.61ms, 32.7MB)
테스트 3  〉	통과 (5.18ms, 36.2MB)
테스트 4  〉	통과 (32.46ms, 39.7MB)
테스트 5  〉	통과 (65.52ms, 45MB)
테스트 6  〉	통과 (0.72ms, 33.6MB)
테스트 7  〉	통과 (4.51ms, 36MB)
테스트 8  〉	통과 (32.96ms, 39.6MB)
테스트 9  〉	통과 (63.79ms, 45MB)
테스트 10 〉	통과 (29.18ms, 39.3MB)
테스트 11 〉	통과 (33.98ms, 39.7MB)
테스트 12 〉	통과 (41.52ms, 41.5MB)
테스트 13 〉	통과 (46.89ms, 42MB)
테스트 14 〉	통과 (0.29ms, 33.6MB)
테스트 15 〉	통과 (15.42ms, 37.7MB)
테스트 16 〉	통과 (11.25ms, 37.8MB)
테스트 17 〉	통과 (15.79ms, 37.8MB)
테스트 18 〉	통과 (11.40ms, 37.6MB)
테스트 19 〉	통과 (2.37ms, 33.9MB)
테스트 20 〉	통과 (16.26ms, 38.4MB)
테스트 21 〉	통과 (21.43ms, 38.4MB)
테스트 22 〉	통과 (13.33ms, 42.4MB)
테스트 23 〉	통과 (32.34ms, 42.3MB)
테스트 24 〉	통과 (46.43ms, 43.1MB)
테스트 25 〉	통과 (0.14ms, 33.5MB)
테스트 26 〉	통과 (0.13ms, 33.6MB)
테스트 27 〉	통과 (0.13ms, 33.5MB)
*/
