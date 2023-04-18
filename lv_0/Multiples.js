const solution = (n, numlist) => {
  answer = numlist.filter((elem) => elem % n == 0);
  return answer;
};

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
