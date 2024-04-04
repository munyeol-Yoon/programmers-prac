function solution(num_list, n) {
  let answer = num_list.slice(0, n);
  return answer;
}

console.log(solution([2, 1, 6], 1));
console.log(solution([5, 2, 1, 7, 5], 3));
