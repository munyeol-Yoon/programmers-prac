function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let temp = arr[queries[i][0]];
    arr[queries[i][0]] = arr[queries[i][1]];
    arr[queries[i][1]] = temp;
  }

  return arr;
}

// console.log(
//   solution(
//     [0, 1, 2, 3, 4],
//     [
//       [0, 3],
//       [1, 2],
//       [1, 4],
//     ]
//   )
// );

console.log(solution([5, 4, 3, 2, 1], [[1, 4]]));

// 입력값 〉 [5, 4, 3, 2, 1], [[1, 4]]
// 기댓값 〉 [5, 1, 3, 2, 4]
