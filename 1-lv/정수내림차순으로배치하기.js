// s를 문자열로 바꾸고, 스플릿하고, 소트하고, 조인하면됩니다.
// 리턴할때 숫자로 바꿔요 끝!!!

function solution(s) {
  var answer = s
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return Number(answer);
}

console.log(solution(118372));
