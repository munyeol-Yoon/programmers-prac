// 소수 찾기

// answer라는 변수에 빈 배열을 담는다
// 2부터 시작해서 n까지 반복문을 실행하는데
// 만약

function isPrime(x) {
  if (x < 2) return false;
  for (let k = 2; k <= Math.sqrt(x); k++) {
    if (k % 2 == 0) continue;
    if (x % k === 0) return false;
  }
  return true;
}

function solution(n) {
  var answer = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) continue;
    if (isPrime(i)) answer++;
  }
  console.log(answer);

  return answer;
}

console.log(solution(10));

//----------------------------------------------------------------

// function solution(n) {
//   var answer = [2]; // 2는 소수니까 먼저 넣기

//   for (let i = 3; i <= n; i = i + 2) {
//     // 1은 소수x, 모든 짝수는 소수x므로 홀수만 검사
//     let isOdd = true;
//     for (let j = 3; j <= Math.sqrt(i); j = j + 2) {
//       // 어차피 짝수들로 안나눠짐
//       if (i % j === 0) {
//         isOdd = false;
//         break; // 필수
//       }
//     }
//     if (isOdd === true) {
//       answer.push(i);
//     }
//   }
//   return answer.length;
// }
