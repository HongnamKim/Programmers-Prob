// https://school.programmers.co.kr/learn/courses/30/lessons/12935
// 제일 작은 수 제거하기

const solution = (arr) => {
  const target = Math.min(...arr);
  let deleted = arr.filter((elem) => elem !== target);
  if (!deleted.length) {
    deleted.push(-1);
  }
  return deleted;
};

console.log(solution([10]));
