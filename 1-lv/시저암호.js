function solution(s, n) {
  let answer = "";
  let alphaLower = "abcdefghijklmnopqrstuvwxyz";
  let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < s.length; i++) {
    let text = s[i];
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let arr = alphaUpper.includes(text) ? alphaUpper : alphaLower;
    let index = arr.indexOf(text) + n;
    if (index >= arr.length) {
      index -= arr.length;
    }

    answer += arr[index];
  }

  return answer;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
