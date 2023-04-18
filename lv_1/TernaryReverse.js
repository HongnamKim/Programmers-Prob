const solution = (n) => {
  const ternary = parseInt(n.toString(3).split("").reverse().join(""), 3);
  return ternary;
};

console.log(solution(45));
