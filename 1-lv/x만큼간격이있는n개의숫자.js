// ㅎㅇㅎㅇㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ

// 1. answer라는 변수에 빈 배열을 만든다.
// 2. 반복문을 사용해서 n개만큼 증가시킨다.
// 3. 그 값을 리턴한다.

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
