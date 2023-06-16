//ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ
// 음양더하기
// ------------------------

// 반복문을 사용합니다. i는 0부터 시작하며 abso 의 길이만큼 반복합니다.
// 삼항연산자를 활용하여 sign 값이 true이면 양수값을 부여하고 false이면 음수값을 abso 에 부여 합니다. 그 값을 answer 값에 합칩니다.

/* 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
   실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요. */

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
