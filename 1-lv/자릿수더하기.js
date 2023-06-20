// ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2

// 문자로 변환하여 쪼개서 배열로 만들어서 reduce 로 더하고 숫자로 형변환 합니다.

function solution(n) {
  var answer = n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));

  return Number(answer);
}

console.log(solution(1));
