const solution = (n) => {
  n = n.toString().split("");
  n = n.sort((a, b) => b - a);
  return parseInt(n.join(""));
};

console.log(solution(118372));
