const factorial = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

function solution(balls, share) {
  const answer =
    factorial(balls) / (factorial(balls - share) * factorial(share));

  return answer;
}

console.log(solution(30, 15));
