const solution = (my_string) => {
  let answer = [];
  answer = [...my_string].filter((elem) => !isNaN(parseInt(elem)));
  answer = answer.map((elem) => parseInt(elem));
  answer = answer.sort((a, b) => a - b);
  return answer;
};

console.log(solution("hi12392"));
