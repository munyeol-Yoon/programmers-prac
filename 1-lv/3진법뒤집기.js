// gdgdgdgdgdgdgd
// ToToToToToToToToToToToToToToToToToToToToToToToToToTo

// tostring 으로 3진법을 만듭니다. 쪼갭니다. 순서를 바꿉니다. 합칩니다. parseInt로 10진법으로 돌립니다.

function solution(n) {
  let answer = 0;
  let toThree = n.toString(3);

  for (let i = 0; i < toThree.length; i++) {
    answer += +toThree[i] * Math.pow(3, i);
  }

  return answer;
}

console.log(solution(45)); // >> 7
console.log(solution(125)); // >> 229

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
