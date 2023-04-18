const solution = (s) => {
  s = s.split(" ");

  let answer = [];
  s.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        word = word.replace(word[i], word[i].toUpperCase());
      } else {
        word = word.replace(word[i], word[i].toLowerCase());
      }
    }
    answer.push(word);
  });
  return answer.join(" ");
};

console.log(solution("abc   abcd abcde"));
