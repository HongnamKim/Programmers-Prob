const solution = (num) => {
  let answer = 0;
  i = 0;
  while (answer <= 500) {
    if (num === 1) {
      return answer;
    }
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    answer++;
  }
  return -1;
};
