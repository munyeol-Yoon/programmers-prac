//문자열안에 문자열

//문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 1. 변수 answer 0 초기값 설정
// 2. for문 으로 문자열 하나씩돌아본 후
// 3. 문자열 안에 있으면 true 1 false 일경우 2 출력

function solution(str1, str2) {
  var answer = 0;
  answer = str1.includes(str2) ? 1 : 2;

  return answer;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
console.log(solution("ppprrrogrammers", "pppp"));
