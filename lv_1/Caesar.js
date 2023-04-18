const solution = (s, n) => {
  s = s.split("");
  const sCharCode = s.map((elem) => elem.charCodeAt());

  const decryptCode = sCharCode.map((elem) => {
    if (elem >= 65 && elem <= 90) {
      elem += n;
      if (elem > 90) {
        elem -= 26;
      }
    } else if (elem >= 97 && elem <= 122) {
      elem += n;
      if (elem > 122) {
        elem -= 26;
      }
    }

    return elem;
  });

  const answer = decryptCode.map((elem) => {
    return String.fromCharCode(elem);
  });

  return answer.join("");
};

console.log(solution("a B z", 4));
