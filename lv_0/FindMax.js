const solution = (array) => {
  let answer = [array[0], 0];
  array.forEach((elem, index) => {
    if (elem > answer[0]) {
      answer[0] = elem;
      answer[1] = index;
    }
  });
  return answer;
};
