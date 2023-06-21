//ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎ

// count 선언
// 반복문 생성 while 문으로 num 값이 1 이될때까지 해주면 되겠쥬?
// 반복문 안에 조건문 을 생성한다. 짝수일때 2로 나누고 count 를 1 더해준다.
// 홀수일때 3을 곱하고 1을 더한후 count 를 1 더해준다.
// 1 이 되거나 count 가 500이 넘는다면 반복문 탈출, 1이 되었을때는 count 를 리턴하고 500이 넘는 경우는 -1 을 리턴한다.

function solution(num) {
  let cnt = 0;
  while (1 !== num) {
    if (cnt === 500) {
      return -1;
    }
    if (num === 1) {
      break;
    } else if (num % 2 === 0) {
      num = num / 2;
      cnt += 1;
    } else if (num % 2 === 1) {
      num = 3 * num + 1;
      cnt += 1;
    }
  }
  return cnt;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));

/*

for (let i = 0; ; i++){
    
}

*/
///
