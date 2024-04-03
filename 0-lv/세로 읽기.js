function solution(my_string, m, c) {
  let answer = "";

  for (let i = 0; i < my_string.length; i += m) {
    answer += my_string[i + c - 1];
  }

  return answer;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
console.log(solution("programmers", 1, 1));
