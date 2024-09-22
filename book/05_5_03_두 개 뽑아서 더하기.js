function solution(numbers) {
  const arr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      number = numbers[i] + numbers[j];
      arr.push(number);
    }
  }

  result = [...new Set(arr)].sort((a, b) => a - b);

  return result;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
