const solution = (a, b) => {
  const count = Math.abs(a - b) + 1;
  return ((a + b) * count) / 2;
};
