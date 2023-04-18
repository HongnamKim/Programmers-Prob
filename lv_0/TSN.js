const solution = (order) => {
  let answer = 0;
  order = order.toString().split("");
  order.forEach(
    (elem) => parseInt(elem) % 3 == 0 && parseInt(elem) !== 0 && answer++
  );
  return answer;
};

console.log(solution(29423));
