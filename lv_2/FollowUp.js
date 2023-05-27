// https://school.programmers.co.kr/learn/courses/30/lessons/12981
// 영어 끝말잇기
const solution = (n, words) => {
  let result = [];
  for (let i = 1; i < words.length; i++) {
    const before = words.slice(0, i);

    if (before.indexOf(words[i]) !== -1) {
      let num = (i + 1) % n;
      if (num == 0) {
        num = n;
      }
      return [num, Math.ceil((i + 1) / n)];
    }

    const lastWord = words[i - 1].split("").at(-1);
    const curWord = words[i].split("").at(0);

    if (lastWord !== curWord) {
      let num = (i + 1) % n;
      if (num == 0) {
        num = n;
      }
      return [num, Math.ceil((i + 1) / n)];
    }
  }
  return [0, 0];
};

const n = 2;
const words = ["hello", "one", "even", "never", "now", "world", "draw"];

console.log(solution(n, words));
