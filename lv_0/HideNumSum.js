const solution = (my_string) => {
  let convert = my_string.split("").map((elem) => {
    if (isNaN(parseInt(elem))) {
      return " ";
    } else {
      return elem;
    }
  });
  convert = convert.join("").split(" ");

  let answer = 0;
  convert.forEach((elem) => {
    if (!isNaN(parseInt(elem))) {
      answer += parseInt(elem);
    }
  });
  return answer;
};

console.log(solution("aAb1B2cC34oOp"));
