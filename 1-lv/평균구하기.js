// gdgdgdgdgdgd
// 평균구하기

// 인덱스의 길이를 변수에 저장해줍니당.
// 배열의 모든 값의 합을 구해줍니다.
// 두 변수를 나눠줍니다.

function solution(arr) {
  var answer = 0;
  let len = arr.length;
  let sum = arr.reduce((a, b) => a + b);
  answer = sum / len;
  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
