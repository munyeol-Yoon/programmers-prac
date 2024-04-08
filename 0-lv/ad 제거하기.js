function solution(strArr) {
  let answer = strArr.filter((item) => !item.includes("ad"));

  return answer;
}

console.log(solution(["and", "notad", "abcd"]));
console.log(solution(["there", "are", "no", "a", "ds"]));
