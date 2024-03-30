function solution(arr) {
  let stk = [];

  for (let i = 0; i < arr.length; i++) {
    let lastIndex = stk[stk.length - 1];
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else if (lastIndex < arr[i]) {
      stk.push(arr[i]);
    } else if (lastIndex >= arr[i]) {
      stk.pop();
      i--;
    }
  }

  return stk;
}

console.log(solution([1, 4, 2, 5, 3]));
