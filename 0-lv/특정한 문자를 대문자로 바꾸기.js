function solution(my_string, alp) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === alp) {
      answer += my_string[i].toUpperCase();
    } else {
      answer += my_string[i];
    }
  }

  return answer;
}

console.log(solution("programmers", "p"));
console.log(solution("lowercase", "x"));

// const solution=(s,a)=>s.replaceAll(a,a.toUpperCase())
