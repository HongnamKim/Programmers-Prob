const solution = (array, n) => {
  array = array.sort((a, b) => a - b);

  const arrayDiff = array.map((elem) => Math.abs(elem - n));
  const minValue = Math.min(...arrayDiff);

  return array[arrayDiff.indexOf(minValue)];
};

console.log(solution([3, 10, 28], 20));
