const solution = (absolutes, signs) => {
  let answer = 0;
  absolutes.forEach((elem, index) =>
    signs[index] ? (answer += elem) : (answer -= elem)
  );
  return answer;
};

console.log(solution([4, 7, 12], [true, false, true]));
