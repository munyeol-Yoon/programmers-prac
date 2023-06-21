// ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ
// hihihihihihihihihihihihihihihihihihihihi

// 옆의 수가 같다면 제거

function solution(arr) {
  var answer = [];
  arr.push(null);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
