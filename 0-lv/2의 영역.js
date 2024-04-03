function solution(arr) {
  let answer = [];
  let start = arr.indexOf(2);
  let end = arr.lastIndexOf(2);

  return (answer = arr.includes(2) ? arr.slice(start, end + 1) : [-1]);
}

console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
console.log(solution([2, 2, 2, 2, 2, 2, 2, 2]));
