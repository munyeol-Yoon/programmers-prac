// 없는 숫자 더하기
// gdgdgdgdgdgdgdgdgdgdgdgdgdgdgdgdgdgdgdㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ

// 배열의 길이만큼 반복문을 수행한다.
// numbers 를 정렬해준다.
// 배열의 i 번째 인덱스의 값과 i 값이 같지 않은경우 answer 에 더해준다.
// init = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// numbers = [0, 1, 2, 3, 4, 6, 7, 8, 0]
function solution(numbers) {
  let init = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let initValue = init.reduce((a, b) => a + b);
  let numbersValue = numbers.reduce((a, b) => a + b);
  var answer = initValue - numbersValue;

  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
