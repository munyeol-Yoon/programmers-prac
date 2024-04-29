function solution(t, p) {
  let arr = [];

  for (let i = 0; i <= t.length - p.length; i++) {
    // if (~~t.slice(i, p.length + i) <= ~~p) {
    //   arr.push(~~t.slice(i, p.length + i));
    // }
    if (parseInt(t.slice(i, p.length + i)) <= parseInt(p)) {
      arr.push(~~t.slice(i, p.length + i));
    }
  }
  return arr.length;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));
console.log(solution("3141592.45357804", "55")); // 소수점일때 값이 다른데, 프로그래머스 테스트케이스가 문제일지, 소수점이 문제일지..
