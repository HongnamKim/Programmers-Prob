// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// 이진 변환 반복하기

const solution = (s) => {
  let convert = 0;
  let remove = 0;
  while (s !== "1") {
    s = s.split("");
    s.forEach((elem) => {
      if (elem === "0") {
        remove++;
      }
    });
    s = s.filter((elem) => elem !== "0");
    s = Number(s.length);
    s = s.toString(2);
    convert++;
  }
  return [convert, remove];
};

const s = "1111111";

console.log(solution(s));
