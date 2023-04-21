// https://school.programmers.co.kr/learn/courses/30/lessons/120907
// OX 퀴즈

const solution = (quiz) => {
  let answer = [];
  quiz.forEach((elem) => {
    let elemSplit = elem.split(" ");
    for (let i = 0; i < elemSplit.length; i++) {
      if (!isNaN(+elemSplit[i])) {
        elemSplit[i] = +elemSplit[i];
      }
    }
    let check = true;
    if (elemSplit[1] === "+") {
      check = elemSplit[0] + elemSplit[2] === elemSplit[4] ? true : false;
    } else if (elemSplit[1] === "-") {
      check = elemSplit[0] - elemSplit[2] === elemSplit[4] ? true : false;
    }
    if (check) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  });
  return answer;
};

console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
);
