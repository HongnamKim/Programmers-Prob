const solution = (players, callings) => {
  const swap = (players, name) => {
    const callNum = players.indexOf(name);
    const temp = players[callNum];
    players[callNum] = players[callNum - 1];
    players[callNum - 1] = temp;

    return players;
  };
  callings.forEach((elem) => {
    players = swap(players, elem);
  });

  return players;
};

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
