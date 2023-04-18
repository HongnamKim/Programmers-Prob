const solution = (emergency) => {
  const copy = emergency.map((elem) => elem);
  emergency.sort((a, b) => b - a);

  const order = copy.map((elem) => emergency.indexOf(elem) + 1);
  return order;
};

console.log(solution([3, 76, 24]));
