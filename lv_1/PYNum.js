const solution = (s) => {
  s = s.split("");
  let numOfP = 0;
  let numOfY = 0;
  s.forEach((elem) => {
    elem = elem.toLowerCase();
    if (elem === "p") {
      numOfP++;
    } else if (elem === "y") {
      numOfY++;
    }
  });
  if (numOfP === numOfY) {
    return true;
  } else {
    return false;
  }
};

console.log(solution("pPoooyY"));
