function solution(x1, x2, x3, x4) {
  let answer = true;
  let a, b;

  // V
  if (x1 || x2) {
    a = true;
  } else {
    a = false;
  }

  if (x3 || x4) {
    b = true;
  } else {
    b = false;
  }

  // ^
  if (!a || !b) {
    answer = false;
  }

  return answer;
}

console.log(solution(false, true, true, true));
console.log(solution(true, false, false, false));

/*
function solution(x1, x2, x3, x4) {
    return (x1||x2) && (x3||x4)
}
 */
