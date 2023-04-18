const solution = (num, k) => {
  num = num.toString().split("");

  for (let i = 0; i < num.length; i++) {
    if (parseInt(num[i]) === k) {
      return i + 1;
    }
  }
  return -1;
};

console.log(solution(29183, 1));
