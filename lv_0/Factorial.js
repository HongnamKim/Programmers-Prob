const factorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const solution = (n) => {
  let param = 1;
  while (factorial(param) <= n) {
    console.log(param, ": ", factorial(param));
    param++;
  }
  return param - 1;
};
console.log(solution(5));
