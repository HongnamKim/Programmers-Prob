// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사

const solution = (answer) => {
  let corrects = [0, 0, 0];
  let stuOne = [1, 2, 3, 4, 5]; // 5
  let stuTwo = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
  let stuThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10

  const repeatOne = answer.length / stuOne.length;
  const repeatTwo = answer.length / stuTwo.length;
  const repeatThree = answer.length / stuThree.length;

  const remainOne = stuOne.slice(0, answer.length % stuOne.length);
  const remainTwo = stuTwo.slice(0, answer.length % stuTwo.length);
  const remainThree = stuThree.slice(0, answer.length % stuThree.length);

  let submitOne = Array.from(
    stuOne.join("").repeat(repeatOne) + remainOne.join("")
  );
  let submitTwo = Array.from(
    stuTwo.join("").repeat(repeatTwo) + remainTwo.join("")
  );
  let submitThree = Array.from(
    stuThree.join("").repeat(repeatThree) + remainThree.join("")
  );
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === +submitOne[i]) {
      corrects[0] += 1;
    }
    if (answer[i] === +submitTwo[i]) {
      corrects[1] += 1;
    }
    if (answer[i] === +submitThree[i]) {
      corrects[2] += 1;
    }
  }
  let students = [];
  let maxStuIndex = 0;
  for (let i = 0; i < 3; i++) {
    if (corrects[maxStuIndex] == corrects[i]) {
      students.push(i + 1);
    } else if (corrects[maxStuIndex] < corrects[i]) {
      students.splice(0, students.length);
      students.push(i + 1);
      maxStuIndex = i;
    }
  }
  return students.sort((a, b) => a - b);
};

console.log(solution([1, 2, 3, 4, 5]));
