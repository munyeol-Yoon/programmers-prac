function checkConditions(preValue, value) {
  if (preValue + 1 === value) {
    return "w";
  }
  if (preValue - 1 === value) {
    return "s";
  }
  if (preValue + 10 === value) {
    return "d";
  }
  if (preValue - 10 === value) {
    return "a";
  }
}

function solution(numLog) {
  let answer = "";
  let preValue = numLog[0];
  for (let i = 1; i < numLog.length; i++) {
    answer += checkConditions(preValue, numLog[i]);
    preValue = numLog[i];
  }

  return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
