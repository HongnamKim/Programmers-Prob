// https://school.programmers.co.kr/learn/courses/30/lessons/82612
// 부족한 금액 계산하기

const solution = (price, money, count) => {
  /*let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }
  if (totalPrice <= money) {
    return 0;
  }
  return totalPrice - money;*/
  const lack = ((price + price * count) * count) / 2 - money;
  return lack > 0 ? lack : 0;
};

console.log(solution(3, 20, 4));
