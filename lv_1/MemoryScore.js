const solution = (name, yearning, photos) => {
  let scoreTable = {};
  let score = new Array(photos.length).fill(0);
  for (let i = 0; i < name.length; i++) {
    scoreTable[name[i]] = yearning[i];
  }
  photos.forEach((photo, index) => {
    for (let i = 0; i < photo.length; i++) {
      if (scoreTable[photo[i]]) {
        score[index] += scoreTable[photo[i]];
      }
    }
  });
  return score;
};

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
