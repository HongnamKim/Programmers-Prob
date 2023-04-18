// https://school.programmers.co.kr/learn/courses/30/lessons/17681
// 비밀지도

const solution = (n, arr1, arr2) => {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push([]);
  }
  const digArr1 = convertDig(arr1, n).map((elem) => elem.split(""));
  const digArr2 = convertDig(arr2, n).map((elem) => elem.split(""));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (digArr1[i][j] === "1" || digArr2[i][j] === "1") {
        answer[i][j] = "#";
      } else {
        answer[i][j] = " ";
      }
    }
  }
  answer = answer.map((row) => row.join(""));

  return answer;
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

function convertDig(arr, n) {
  const digArr = arr.map((elem) => {
    let digElem = elem.toString("2");
    if (digElem.length < n) {
      len = digElem.length;
      for (let i = 0; i < n - len; i++) {
        digElem = "0" + digElem;
      }
    }
    return digElem;
  });

  return digArr;
}
