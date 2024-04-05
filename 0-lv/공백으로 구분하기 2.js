function solution(my_string) {
  return my_string.split(" ").filter((i) => i !== "");
}

console.log(solution(" i    love  you"));
console.log(solution("    programmers  "));
