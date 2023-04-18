// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// 핸드폰 번호 가리기

const solution = (phone_number) => {
  const hideRange = phone_number.length - 4;
  return phone_number.replace(
    phone_number.slice(0, hideRange),
    "*".repeat(hideRange)
  );
};

console.log(solution("01033334444"));
