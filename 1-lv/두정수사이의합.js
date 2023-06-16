// ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅇㅎㅇ

// for 문 을 만들어 i = a , 조건식 i 가 b 가될 때까지 증감해준다.
// answer 에 i 를 계속 더해준다.

// a = 5 , b = 3 c = 0

function solution(a, b) {
  var answer = 0;
  if (a > b) {
    let c = b;
    b = a;
    a = c;
  }

  for (let i = a; i <= b; i++) {
    // 3 5
    answer += i;
  }
  return answer;
}

console.log(solution(3, 5));
