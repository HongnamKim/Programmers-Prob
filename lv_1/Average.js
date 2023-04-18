function solution(arr) {
  let answer = 0;
  answer = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

  return answer;
}

console.log(solution([1, 2, 3, 4]));
