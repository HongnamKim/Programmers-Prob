const solution = (arr) => {
  // stack의 마지막 요소와 현재 arr의 요소가 같은지 확인
  // 같다면 다음 요소 진행
  // 다르다면 arr에 유지 --> 확인한 arr 요소를 stack에 추가
  let stack = [];
  arr.forEach((elem) => {
    if (elem !== stack[stack.length - 1]) {
      stack.push(elem);
    }
  });
  return stack;
};

console.log(solution([4, 4, 4, 3, 3]));
