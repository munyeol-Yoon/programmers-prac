// 짝수와 홀 수
// ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ

// ----------------------------------------------------------------
// 조건문을 활용해 2를 나눈 나머지 값이 0 이면 answer 에 "Even"
// 아니면 answer 에 "Odd"
// answer 를 리턴한다.

function solution(num) {
  var answer = "";

  if (num % 2 === 0) {
    answer = "Even";
  } else if (num % 2 !== 0) {
    answer = "Odd";
  }
  return answer;
}

console.log(solution(13));
