// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// 체육복

const solution = (n, lost, reserve) => {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let lost_st = lost.filter((elem) => !reserve.includes(elem));
  let reserve_st = reserve.filter((elem) => !lost.includes(elem));

  let possible = n - lost_st.length;
  let borrow = 0;
  lost_st.forEach((elem) => {
    if (reserve_st.includes(elem - 1)) {
      reserve_st.splice(reserve_st.indexOf(elem - 1), 1);

      borrow++;
    } else if (reserve_st.includes(elem + 1)) {
      reserve_st.splice(reserve_st.indexOf(elem + 1), 1);
      borrow++;
    }
  });
  return possible + borrow;
};

const n = 4;
const lost = [2, 3];
const reserve = [3, 4];

console.log(solution(n, lost, reserve));
