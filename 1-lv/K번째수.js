// K 번째 수
// for 문으로 commands[i] 를 불러 옵니다. 불러온 값에서 [0]번째 에 있는 수를 i, [1]번째 에 있는 수를 j, [2]번째 에 있는 수를 k 로 인식합니다.
// array 배열에서 slice 매서드를 사용하여 i부터 j까지 배열을 불리하고 그 배열을 sort로 정렬하여 k번째 수를 추출하여 answer 에 push 합니다.
// 이 반복을 commands.length 만큼 반복합니다.

// ㅎㅇㅎㅇㅎㅇㅎㅇ

function solution(array, commands) {
  var answer = [];

  for (let [i, j, k] of commands) {
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
