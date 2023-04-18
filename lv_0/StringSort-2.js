const solution = (my_string) => {
  my_string = my_string.split("");
  my_string = my_string.map((elem) => elem.toLowerCase());
  my_string.sort();
  return my_string.join("");
};

console.log(solution("Bcad"));
