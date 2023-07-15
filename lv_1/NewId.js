// https://school.programmers.co.kr/learn/courses/30/lessons/72410
// 신규 아이디 추천

const solution = (new_id) => {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/[.]{2,}/g, ".")
    .replace(/^[.]|[.]$/g, "");

  if (!new_id) {
    new_id = "a";
  }
  new_id = new_id.slice(0, 15).replace(/[.]$/g, "");
  if (new_id.length < 3) {
    const add = new_id[new_id.length - 1];
    while (new_id.length < 3) {
      new_id = new_id + add;
    }
  }
  return new_id;
};

const new_id = "=.=";

console.log(solution(new_id));
