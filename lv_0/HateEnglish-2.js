const solution = (numbers) => {
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
  for (let i = 0; i < text.length; i++) {
    numbers = numbers.split(text[i]);
    numbers = numbers.join(i);
  }
  return numbers;
};

console.log(solution("onefourzerooneseven"));
