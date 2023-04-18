const solution = (s) => {
  s = s.split("");
  for (let i = 0; i < s.length - 1; i++) {
    let check = false;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        s[j] = "";
        check = true;
      }
    }
    if (check) {
      s[i] = "";
    }
  }
  s = s.sort().join("");
  return s;
};

console.log(solution("hello"));
