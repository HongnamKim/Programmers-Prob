const solution = (numbers, direction) => {
  if (direction === "left") {
    const front = numbers.shift();
    return [...numbers, front];
  } else {
    const back = numbers.pop();
    return [back, ...numbers];
  }
};

console.log(solution([1, 2, 3], "right"));
