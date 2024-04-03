function solution(arr, idx) {
  let answer = -1;

  for (let i = idx; i <= arr.length; i++) {
    if (arr[i] === 1) {
      answer = i;
      break;
    }
  }

  return answer === -1 ? -1 : answer;
}

console.log(solution([0, 0, 0, 1], 1));
console.log(solution([1, 0, 0, 1, 0, 0], 4));
console.log(solution([1, 1, 1, 1, 0], 3));
