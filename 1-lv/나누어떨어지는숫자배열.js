// 나누어 떨어지는 숫자배열
// ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ

//--------------------------------------------------------

// answer 라는 이름의 빈 배열을 선언한다.
// 반복문을 선언한다. arr 의 길이만큼 반복하고 i 는 1씩 증가
// 반복문 안에 조건문을 생성한다. arr[i] 를 divisor 로 나눈 나머지 값이 0 인경우
// answer 에 값을 푸쉬한다.
// 조건문을 나가고
// 조건문을 만드는데 i 가 arr 의 길이의 -1 과 같을때 answer가 비어있다면 answer 에 -1 을 푸쉬한다.
// 반복문을 나간다
// answer 를 리턴한다.

function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  if (answer.length === 0) {
    answer.push(-1);
  }

  answer.sort((a, b) => a - b);
  return answer;
}

console.log(solution([2, 36, 1, 3], 1));
