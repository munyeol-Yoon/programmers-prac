// gdgdgdgdgdgdgdgdgdgdgdgdgdgd
//gdgd
//ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2ㅎ2

function solution(n) {
  var answer = (Math.sqrt(n) + 1) ** 2;

  if (!Number.isInteger(answer)) {
    return -1;
  }
  return answer;
}

console.log(solution(3));

//
// function solution(n) {
//   let answer = 0
//   let sqrtN = Math.sqrt(n)
//   Number.isInteger(sqrtN) === true ? answer = Math.pow(sqrtN+1,2) : answer = -1

//   return answer
// }
