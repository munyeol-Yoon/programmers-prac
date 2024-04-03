function solution(num_list, n) {
  let answer = [];

  for (let i = n - 1; i < num_list.length; i++) {
    answer.push(num_list[i]);
  }

  return answer;
}

console.log(solution([2, 1, 6], 3));
console.log(solution([5, 2, 1, 7, 5], 2));

// function solution(num_list, n) {
//   return num_list.slice(n - 1);
// }
