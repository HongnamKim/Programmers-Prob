// https://school.programmers.co.kr/learn/courses/30/lessons/131128
// 숫자 짝꿍

const solution = (X, Y) => {
  const xNum = new Array(10).fill(0);
  const yNum = new Array(10).fill(0);

  X = X.split("");
  Y = Y.split("");

  // X와 Y에 0 부터 9까지 숫자가 몇개 있는지 확인
  X.forEach((n) => (xNum[n] += 1));
  Y.forEach((n) => (yNum[n] += 1));

  let commonNum = [];

  // X와 Y에 더 적게 갖고 있는 개수로 commonNum에 추가
  for (let i = 0; i < 10; i++) {
    const num = Math.min(xNum[i], yNum[i]);
    for (let j = 0; j < num; j++) {
      commonNum.push(i);
    }
  }

  // 공통으로 갖고 있는 숫자가 없을 경우 "-1" return
  if (commonNum.length === 0) {
    return "-1";
  }

  // 공통으로 갖고 있는 숫자가 0 뿐일 경우 "0" return
  commonNum.reverse();
  if (commonNum[0] == 0) {
    return "0";
  }

  // 내림차순으로 정렬되어있는 commonNum을 string으로 변환 후 return
  let answer = commonNum.join("");
  return answer;
};

console.log(solution("100", "20"));
