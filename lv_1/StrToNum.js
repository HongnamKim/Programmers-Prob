const solution = (s) => {
  const neg = s[0] === "-" ? true : false;
  if (neg) {
    s = parseInt(s.replace("-", "")) * -1;
    return s;
  } else {
    return parseInt(s);
  }
};

console.log(solution("-1234"));
