// ㅎㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ
// h2h2h2h2h2h2h2h2h2h2h2h2h2h2h2h2

// for loop 를 도는데 i 가 n , 0 이 될때 까지 i 를 빼줍니다.
// 조건문을 loop 안에 작성하는데 n 나머지 i 가 1 인 경우 answer 에 i 를 넣어준다.
// 조건문과 loop 가 종료되면 answer 를 리턴한다.

function solution(n) {
  var answer = 0;
  for (let i = n; i > 0; i--) {
    if (n % i === 1) {
      answer = i;
    }
  }
  return answer;
}

console.log(solution(10));
