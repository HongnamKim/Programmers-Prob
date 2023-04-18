const solution = (n) => {
  let answer = [];
  let check = true;
  while (n !== 0) {
    if (check) {
      answer.push("수");
    } else {
      answer.push("박");
    }
    check = !check;
    n--;
  }
  return answer.join("");
};

console.log(solution(3));
