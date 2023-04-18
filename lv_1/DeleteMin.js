const solution = (arr) => {
  const target = Math.min(...arr);
  let deleted = arr.filter((elem) => elem !== target);
  if (!deleted.length) {
    deleted.push(-1);
  }
  return deleted;
};

console.log(solution([10]));
