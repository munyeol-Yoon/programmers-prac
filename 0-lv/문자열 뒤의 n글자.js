function solution(my_string, n) {
  let answer = my_string.slice(my_string.length - n, my_string.length);

  return answer;
}

console.log(solution("ProgrammerS123", 11));
