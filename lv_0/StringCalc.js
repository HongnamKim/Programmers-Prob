const solution = (my_string) => {
  let nums = [];
  let opers = [];
  let answer = 0;
  my_string = my_string
    .split(" ")
    .map((elem) => (isNaN(parseInt(elem)) ? elem : parseInt(elem)));

  my_string.forEach((elem) => {
    if (typeof elem === "number") {
      nums.push(elem);
    } else {
      opers.push(elem);
    }
  });
  console.log(nums);
  console.log(opers);
};

console.log(solution("13 + 4"));
