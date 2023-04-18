const solution = (n) => {
  n = n.toString().split("");
  n = n.reverse();
  n = n.map((elem) => parseInt(elem));
  return n;
};

console.log(solution(12345));
