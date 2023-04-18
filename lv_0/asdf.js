function solution(cipher, code) {
  var answer = "";
  const words = cipher.split("");
  words.forEach((element, index) => {
    (index + 1) % code == 0 && (answer = answer + element);
  });
  return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4));
