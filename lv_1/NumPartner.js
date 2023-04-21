// https://school.programmers.co.kr/learn/courses/30/lessons/131128
// 숫자 짝꿍

const solution = (X, Y) => {
  X = X.split("");
  Y = Y.split("");
  let partner = [];
  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);
  X.forEach((num) => {
    console.log(num);
    if (Y.includes(num)) {
      partner.push(num);
      Y.splice(Y.findIndex(num), Y.findIndex(num));
    }
  });
  console.log(partner);
};

console.log(solution("5525", "1255"));
