// 행렬의 덧셈
// ----------------------------------------------------------------

// answer = [] 배열 형식으로 선언
// 이중반복문 선언 arr1 의 길이만큼, 두번째 반복문은 arr1[0] 의 길이만큼
// 첫번째 반복문 안에 빈 배열을 가진 sum 변수 선언
// 두번째 반복문 안에서 값을 더해주고 sum 에 값을 푸쉬 해준다.
// 두번째 반복문이 끝나면 answer 에 푸쉬해준다.
// answer 를 리턴한다.

function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[0].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
console.log(solution([[1], [2]], [[3], [4]]));
