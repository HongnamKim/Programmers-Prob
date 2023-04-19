// https://school.programmers.co.kr/learn/courses/30/lessons/120902
// 문자열 계산하기

const solution = (my_string) => {
  let nums = [];
  let opers = ["+"];
  let answer = 0;
  my_string = my_string
    .split(" ")
    .map((elem) => (isNaN(parseInt(elem)) ? elem : parseInt(elem)));

  my_string.forEach((elem) => {
    if (typeof elem === "number") {
      nums.push(elem);
    } else {
      opers.push(elem);
    }
  });
  while (nums.length) {
    const oper = opers.shift();
    if (oper == "+") {
      answer += nums.shift();
    } else {
      answer -= nums.shift();
    }
  }
  return answer;
};

console.log(solution("3 + 4"));
