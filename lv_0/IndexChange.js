const solution = (my_string, num1, num2) => {
  my_string = my_string.split("");
  const temp = my_string[num1];
  my_string[num1] = my_string[num2];
  my_string[num2] = temp;

  const answer = my_string.join("");
  return answer;
};

console.log(solution("I love you", 3, 6));
