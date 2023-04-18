const solution = (my_string) => {
  my_string = [...my_string];
  let answer = "";
  my_string.forEach((elem) => {
    if (elem.charCodeAt(0) > 96) {
      answer += String.fromCharCode(elem.charCodeAt(0) - 32);
    } else {
      answer += String.fromCharCode(elem.charCodeAt(0) + 32);
    }
  });
  return answer;
};

console.log(solution("aBc"));
