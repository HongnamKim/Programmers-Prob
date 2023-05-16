// https://school.programmers.co.kr/learn/courses/30/lessons/12941
// 최솟값 만들기

const solution = (A, B) => {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let cuml = 0;
  for (let i = 0; i < A.length; i++) {
    cuml = A[i] * B[i];
  }
  return cuml;
};

const A = [1, 4, 2];
const B = [5, 4, 4];

console.log(solution(A, B));
