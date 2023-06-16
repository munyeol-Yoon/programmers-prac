// 핸드폰 번호 가리기
// ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ

// 반복문을 사용합니다. i는 0부터 시작하며 범위는 phone_number -4 만큼 합니다.
//

function solution(phone_number) {
  let answer = "";
  for (let i = 0; i < phone_number.length; i++) {
    i < phone_number.length - 4
      ? (answer += phone_number[i] = "*")
      : (answer += phone_number[i]);
  }
  return answer;
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
