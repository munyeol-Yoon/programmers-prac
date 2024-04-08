function solution(myString) {
  let answer = myString
    .split("x")
    .sort()
    .filter((i) => i !== "");
  return answer;
}

console.log(solution("axbxcxdx"));
console.log(solution("dxccxbbbxaaaa"));
