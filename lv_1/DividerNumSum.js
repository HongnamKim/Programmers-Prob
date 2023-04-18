const solution = (left, right) => {
  const getDividerNum = (n) => {
    let num = 0;
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        num++;
        if (i * i < n) {
          num++;
        }
      }
    }
    return num;
  };

  let answer = 0;
  for (left; left < right + 1; left++) {
    if (getDividerNum(left) % 2 === 0) {
      answer += left;
    } else {
      answer -= left;
    }
  }
  return answer;
};

console.log(solution(13, 17));
