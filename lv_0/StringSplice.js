const solution = (my_str, n) => {
  my_str = my_str.split("");
  let answer = [];
  while (my_str.length) {
    answer.push(my_str.splice(0, n).join(""));
  }
  return answer;
};

console.log(solution("abc1Addfggg4556b", 6));
