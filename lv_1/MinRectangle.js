const solution = (sizes) => {
  let maxRow = 0,
    maxCol = 0;
  sizes.forEach((size) => {
    //가로에 더 작은 숫자 위치하도록 조정 (50, 60)
    if (size[0] > size[1]) {
      const temp = size[0];
      size[0] = size[1];
      size[1] = temp;
    }
    if (maxRow < size[0]) maxRow = size[0];
    if (maxCol < size[1]) maxCol = size[1];
  });
  return maxRow * maxCol;
};

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
