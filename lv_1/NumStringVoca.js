const solution = (s) => {
  let answer = [];
  s = s.split("");
  sLength = s.length;
  const numVoca = [
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
  const numObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  while (s.length) {
    if (!isNaN(parseInt(s[0]))) {
      answer.push(parseInt(s.shift()));
    }
    for (let i = 0; i < 6; i++) {
      if (numVoca.includes(s.slice(0, i).join(""))) {
        answer.push(numObj[s.slice(0, i).join("")]);
        s = s.slice(i);
      }
    }
  }
  return parseInt(answer.join(""));
};

console.log(solution("one4seveneight"));

/*function solution(s) {
  let numbers = [
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
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}*/
