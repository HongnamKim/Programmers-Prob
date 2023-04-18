const solution = (s) => {
  s = s.split("");
  s.sort((a, b) => b.charCodeAt() - a.charCodeAt());
  return s.join("");
};

console.log(solution("Zbcdefg"));
