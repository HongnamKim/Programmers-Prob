const solution = (s) => {
  s = s.split("");

  if (s.length === 4 || s.length === 6) {
  } else {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      return false;
    }
  }
  return true;
};

console.log(solution("a123"));
