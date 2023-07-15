// https://school.programmers.co.kr/learn/courses/30/lessons/42885
// 구명보트

const solution = (people, limit) => {
  let count = 0;
  let boatSum = 0;

  people.sort((a, b) => a - b);

  while (people.length) {
    // 가장 무거운 사람 우선 태운 뒤,
    boatSum = people.pop();
    // 보트 제한에 걸릴 때까지 people을 앞뒤로 체크하면서 사람 태우기
    while (boatSum <= limit) {
      // 맨 뒷사람을 태울 수 있는 경우
      if (boatSum + people.at(-1) <= limit) {
        boatSum = boatSum + people.pop();
      }
      // 맨 앞사람을 태울 수 있는 경우
      else if (boatSum + people[0] <= limit) {
        boatSum += people.shift();
      }
      // 추가로 태울 수 없는 경우
      else {
        break;
      }
    }
    count++;
  }
  return count;
};

const people = [70, 80, 50, 50];
const limit = 100;

console.log(solution(people, limit));
