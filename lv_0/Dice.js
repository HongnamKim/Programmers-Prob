const solution = (box, n) => {
  let answer = 0;
  answer = parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n);
  return answer;
};

console.log(solution([10, 8, 6], 3));
