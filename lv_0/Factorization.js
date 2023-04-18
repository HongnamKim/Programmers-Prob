const solution = (n) => {
  let result = [];
  let divider = 2;

  while (n !== 1) {
    if (n % divider === 0) {
      result.push(divider);
      n = n / divider;
    } else {
      divider++;
    }
  }
  // 중복 제거
  result = [...new Set(result)];

  return result;
};

console.log(solution(420));
