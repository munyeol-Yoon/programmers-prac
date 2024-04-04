function solution(myString, pat) {
  const str = myString.toLowerCase();
  const p = pat.toLowerCase();

  return ~~str.includes(p);
}

console.log(solution("AbCdEfG", "aBc"));
console.log(solution("aaAA", "aaaaa"));
