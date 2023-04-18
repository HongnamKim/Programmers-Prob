// https://school.programmers.co.kr/learn/courses/30/lessons/12930
// 이상한 문자 만들기

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

/*
function solution(s) {
    let answer = '';
    let words = s.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) {
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }
        if (i < words.length -1) {
            answer += ' ';
        }
    }
    return answer;
}*/
