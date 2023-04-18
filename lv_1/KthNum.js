const solution = (array, commands) => {
  let answer = [];
  commands.forEach((command) => {
    const [i, j, k] = command;
    const cutArr = array.slice(i - 1, j);
    cutArr.sort((a, b) => a - b);
    answer.push(cutArr[k - 1]);
  });
  return answer;
};

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
