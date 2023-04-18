const solution = (array) => {
  let answer = 0;
  array = array.join("").split("");
  array.forEach((elem) => elem === "7" && answer++);
  return answer;
};

console.log(solution([7, 77, 17]));
