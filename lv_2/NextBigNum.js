// https://school.programmers.co.kr/learn/courses/30/lessons/12911
// 다음 큰 숫자

const solution = (n) => {
  const initCount = countOnes(n);
  while (1) {
    n = n + 1;
    if (initCount == countOnes(n)) {
      return n;
    }
  }
};

const n = 655395;

console.log(solution(n));

function countOnes(n) {
  let count = 0;
  n = n.toString(2);
  n = n.split("").map((num) => {
    num = parseInt(num);
    count += num;
  });

  return count;
}
