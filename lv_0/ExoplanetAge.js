const solution = (age) => {
  age = age.toString().split("");
  answer = age.map((elem) => String.fromCharCode(parseInt(elem) + 97));
  answer = answer.join("");
  return answer;
};

console.log(solution(23));
