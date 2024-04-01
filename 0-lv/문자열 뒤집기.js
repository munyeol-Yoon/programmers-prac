// function solution(my_string, s, e) {
//   let answer = "";

//   let str = my_string
//     .slice(s, e + 1)
//     .split("")
//     .reverse()
//     .join("");

//   answer = my_string.substring(0, s) + str + my_string.substring(e + 1);

//   return answer;
// }

function solution(my_string, s, e) {
  let arr = my_string.split("");

  let str = my_string
    .slice(s, e + 1)
    .split("")
    .reverse();

  arr.splice(s, e - s + 1, ...str);

  return arr.join("");
}

console.log(solution("Progra21Sremm3", 6, 12));
console.log(solution("Stanley1yelnatS", 4, 10));
