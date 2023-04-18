const solution = (numbers) => {
  let answer = [];
  const text = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  while (numbers.length) {
    for (let i = 1; i < 6; i++) {
      if (text.includes(numbers.slice(0, i))) {
        const number = text.indexOf(numbers.slice(0, i));
        answer.push(number);
        numbers = numbers.replace(numbers.slice(0, i), "");
      }
    }
  }
  return parseInt(answer.join(""));
};

console.log(solution("onefourzerooneseven"));
