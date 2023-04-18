const solution = (N, stages) => {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let denom = stages.filter((elem) => elem >= i).length;
    let numer = stages.filter((elem) => elem === i).length;
    result.push([i, numer / denom]);
  }

  result.sort((a, b) => b[1] - a[1]);
  return result.map((elem) => elem[0]);
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

/*
테스트 1  〉통과 (0.20ms, 33.5MB)
테스트 2  〉통과 (0.81ms, 33.6MB)
테스트 3  〉통과 (158.21ms, 39MB)
테스트 4  〉통과 (990.76ms, 66.2MB)
테스트 5  〉통과 (3832.82ms, 73MB)
테스트 6  〉통과 (4.39ms, 36MB)
테스트 7  〉통과 (40.40ms, 36.9MB)
테스트 8  〉통과 (946.08ms, 67.6MB)
테스트 9  〉통과 (3821.23ms, 74MB)
테스트 10 〉통과 (387.06ms, 61.7MB)
테스트 11 〉통과 (983.37ms, 64.9MB)
테스트 12 〉통과 (519.11ms, 64.6MB)
테스트 13 〉통과 (1485.41ms, 72.1MB)
테스트 14 〉통과 (0.33ms, 33.6MB)
테스트 15 〉통과 (46.78ms, 46.5MB)
테스트 16 〉통과 (14.77ms, 38.1MB)
테스트 17 〉통과 (51.32ms, 46.4MB)
테스트 18 〉통과 (15.72ms, 38.1MB)
테스트 19 〉통과 (4.02ms, 36.1MB)
테스트 20 〉통과 (25.86ms, 39.7MB)
테스트 21 〉통과 (46.17ms, 42.3MB)
테스트 22 〉통과 (4678.51ms, 66.6MB)
테스트 23 〉통과 (58.61ms, 49.4MB)
테스트 24 〉통과 (189.09ms, 55.9MB)
테스트 25 〉통과 (0.09ms, 33.5MB)
테스트 26 〉통과 (0.08ms, 33.3MB)
테스트 27 〉통과 (0.09ms, 33.4MB)
*/
