// https://school.programmers.co.kr/learn/courses/30/lessons/12985
// 예상 대진표

const solution = (N, A, B) => {
  let count = 1;

  // A가 속한 그룹
  A = parseInt((A + 1) / 2);
  // B가 속한 그룹
  B = parseInt((B + 1) / 2);

  // 둘이 속한 그룹이 같지 않을 경우, 다음 라운드 진행
  while (A !== B) {
    A = parseInt((A + 1) / 2);
    B = parseInt((B + 1) / 2);
    count++;
  }
  return count;
};

const N = 8;
const A = 1;
const B = 16;

console.log(solution(N, A, B));
