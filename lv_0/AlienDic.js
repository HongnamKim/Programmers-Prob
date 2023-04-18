const solution = (spell, dic) => {
  let answer = 2;
  dic.forEach((elem) => {
    const word = [...new Set(elem.split(""))];
    let wordCheck = true;
    for (let i = 0; i < spell.length; i++) {
      if (!word.includes(spell[i])) {
        wordCheck = false;
      }
    }
    if (wordCheck) answer = 1;
  });
  return answer;
};

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
