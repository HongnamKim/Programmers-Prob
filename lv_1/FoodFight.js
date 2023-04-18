const solution = (food) => {
  let answer = [];
  let answerRev = [];
  food = food.map((elem) => Math.floor(elem / 2));

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < food[i]; j++) {
      answer.push(i);
      answerRev.push(i);
    }
  }
  answerRev.reverse();
  answer.push(0);
  answer = answer.concat(answerRev);
  return answer.join("");
};

console.log(solution([1, 7, 1, 2]));
