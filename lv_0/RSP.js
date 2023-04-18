const solution = (rsp) => {
  const given = rsp.split("");
  const answer = given
    .map((elem) => {
      if (elem === "2") {
        return "0";
      } else if (elem === "0") {
        return "5";
      } else {
        return "2";
      }
    })
    .join("");
  return answer;
};

console.log(solution("205"));
