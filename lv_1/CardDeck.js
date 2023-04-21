// https://school.programmers.co.kr/learn/courses/30/lessons/159994
// 카드 뭉치

const solution = (cards1, cards2, goal) => {
  let result = "Yes";
  goal.forEach((word) => {
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
    } else {
      result = "No";
    }
  });
  return result;
};

let cards1 = ["i", "water", "drink"];
let cards2 = ["want", "to"];
let goal = ["i", "want", "to", "drink", "water"];

console.log(solution(cards1, cards2, goal));
