const solution = (keyinput, board) => {
  const keyMap = {
    up: [0, 1],
    down: [0, -1],
    right: [1, 0],
    left: [-1, 0],
  };
  let beforePos = [0, 0];
  let afterPos = [0, 0];
  let nowPos = [0, 0];
  keyinput.forEach((elem) => {
    afterPos = [beforePos[0] + keyMap[elem][0], beforePos[1] + keyMap[elem][1]];
    // 캐릭터가 맵을 벗어날 경우 nowPos = beforePos
    // 맵을 벗어나지 않을 경우 nowPos = afterPos
    if (
      Math.abs(afterPos[0]) > parseInt(board[0] / 2) ||
      Math.abs(afterPos[1]) > parseInt(board[1] / 2)
    ) {
      nowPos = beforePos;
    } else {
      nowPos = afterPos;
      beforePos = nowPos;
    }
  });
  return nowPos;
};

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
