const solution = (n) => {
  if (parseInt(n ** 0.5) ** 2 === n) {
    return (n ** 0.5 + 1) ** 2;
  } else {
    return -1;
  }
};

console.log(solution(3));
