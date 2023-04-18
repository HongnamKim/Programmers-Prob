const solution = (numbers) => {
  const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numList.forEach((elem, index) => {
    if (numbers.includes(elem)) {
      numList[index] = 0;
    }
  });
  return numList.reduce((acc, curr) => (acc = acc + curr), 0);
};
