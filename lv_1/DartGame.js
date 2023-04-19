const solution = (dartResult) => {
  let score = [];
  // 숫자만 추출
  dartNum = dartResult.split(/[^0-9]/g);
  // 숫자 이외 추출
  dartSDT = dartResult.split(/[0-9]/g);

  let nums = [];
  let chars = [];

  dartNum.forEach((elem) => {
    if (elem !== "") {
      nums.push(+elem);
    }
  });

  dartSDT.forEach((elem) => {
    if (elem !== "") {
      chars.push(elem);
    }
  });
  console.dir(nums);
  console.dir(chars);

  nums.forEach((elem, index) => {
    score.push(elem);
    const char = chars[index].split("");
    char.forEach((elem) => {
      if (elem === "D") {
        score[index] = score[index] ** 2;
      } else if (elem === "T") {
        score[index] = score[index] ** 3;
      } else if (elem === "#") {
        score[index] = score[index] * -1;
      } else if (elem === "*") {
        score[index] = score[index] * 2;
        score[index - 1] = score[index - 1] * 2;
      }
    });
  });
  console.log(score);
  const answer = score.reduce((acc, curr) => (acc = acc + curr), 0);
  return answer;
};

console.log(solution("1D2S#10S"));

// 1^1 * 2 + 2^2 * 2 + 3^3
