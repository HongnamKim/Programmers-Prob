const solution = (bin1, bin2) => {
  bin1 = parseInt(bin1, 2);
  bin2 = parseInt(bin2, 2);
  let answer = (bin1 + bin2).toString(2);
  return answer;
};

console.log(solution("10", "11"));
