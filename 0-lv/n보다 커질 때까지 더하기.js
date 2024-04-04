function solution(numbers, n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    answer += ~~numbers[i];
    if (answer > n) break;
  }

  return answer;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
console.log(solution([58, 44, 27, 10, 100], 139));

/**
 * function solution(numbers, n) {
    return numbers.reduce((a,c,i,t)=>(a<=n)?a+c:a)
    }
 */
