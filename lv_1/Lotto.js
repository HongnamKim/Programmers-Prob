// https://school.programmers.co.kr/learn/courses/30/lessons/77484
// 로또의 최고 순위와 최저 순위

const solution = (lottos, win_nums) => {
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  let least = 0;
  let zeros = 0;
  lottos.forEach((num) => {
    if (win_nums.includes(num)) {
      least++;
    } else if (num === 0) {
      zeros++;
    }
  });
  console.log(rank[zeros + least], rank[least]);
};

lottos = [44, 1, 0, 0, 31, 25];
win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));
