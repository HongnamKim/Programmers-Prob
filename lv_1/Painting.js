// https://school.programmers.co.kr/learn/courses/30/lessons/161989
// 덧칠하기

const solution = (n, m, section) => {
  let wall = new Array(n).fill(1);
  section.forEach((i) => (wall[i - 1] = 0));

  let count = 0;

  wall.forEach((elem, index) => {
    if (elem === 0) {
      count++;
      for (let i = index; i < index + m; i++) {
        if (i < wall.length) {
          wall[i] = 1;
        } else {
          break;
        }
      }
    }
  });
  return count;
  console.log(count);
  console.log(wall);
};

const n = 8;
const m = 4;
const section = [2, 3, 6];

console.log(solution(n, m, section));
