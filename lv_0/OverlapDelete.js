const solution = (my_string) => {
  my_string = my_string.split("");
  for (let i = 0; i < my_string.length - 1; i++) {
    for (let j = i + 1; j < my_string.length; j++) {
      if (my_string[i] === my_string[j]) {
        my_string[j] = "";
      }
    }
  }
  return my_string.join("");
};

console.log(solution("people"));
