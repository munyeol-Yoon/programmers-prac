function solution(strArr) {
  let answer = [];

  for (let i = 0; i < strArr.length; i++) {
    let str;
    if (i % 2 !== 0) {
      str = strArr[i].toUpperCase();
    } else {
      str = strArr[i].toLowerCase();
    }

    answer.push(str);
  }

  return answer;
}

console.log(solution(["AAA", "BBB", "CCC", "DDD"]));
console.log(solution(["aBc", "AbC"]));

// function solution(strArr) {
//   return strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
// }
