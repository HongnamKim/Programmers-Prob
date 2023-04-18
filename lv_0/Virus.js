const solution = (n, t) => {
  if (t === 0) {
    return n;
  } else {
    return n * solution(n, t - 1);
  }
};

console.log(solution(2, 10));
