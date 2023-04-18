const solution = (i, j, k) => {
  let answer = 0;
  for (i; i < j + 1; i++) {
    const checkList = i.toString().split("");
    checkList.forEach((elem) => {
      elem === k.toString() && answer++;
    });
  }
  return answer;
};

console.log(solution(10, 50, 5));
