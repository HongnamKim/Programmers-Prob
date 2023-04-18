const solution = (n, m) => {
  const answer = [GCD(n, m), LCM(n, m)];
  return answer;
};

console.log(solution(3, 12));
console.log(GCD(2, 5));

function GCD(a, b) {
  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }
  if (a % b === 0) {
    return b;
  } else {
    return GCD(b, a % b);
  }
}

function LCM(a, b) {
  const gcd = GCD(a, b);
  return (a * b) / gcd;
}
