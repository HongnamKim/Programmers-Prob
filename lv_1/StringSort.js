const solution = (strings, n) => {
  const sortedStrings = strings.sort((a, b) => {
    let value = a[n].charCodeAt() - b[n].charCodeAt();
    if (value === 0) {
      for (let i = 0; i < a.length; i++) {
        value = a[i].charCodeAt() - b[i].charCodeAt();
        if (value !== 0) {
          break;
        }
      }
    }
    return value;
  });
  console.log(sortedStrings);
  return sortedStrings;
};

console.log(solution(["abce", "abcd", "cdx"], 1));
