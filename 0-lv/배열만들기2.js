function solution(l, r) {
  let answer = [];

  for (let i = l; i <= r; i++) {
    if (zeroOrFive(i)) {
      answer.push(i);
    }
  }

  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer;
}

function zeroOrFive(num) {
  let digits = num.toString().split("");
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== "0" && digits[i] !== "5") {
      return false;
    }
  }
  return true;
}

console.log(solution(5, 555));
console.log(solution(10, 20));

// function solution(l, r) {
//     let answer = [];

//     for (let i = l; i <= r; i++) {
//       let numStr = i.toString();

//       if (/^[0|5]+$/.test(numStr)) {
//         answer.push(~~i);
//       }
//     }

//     if (answer.length === 0) {
//       answer.push(-1);
//     }

//     return answer;
//   }
