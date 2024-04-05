function solution(myString) {
  let answer = "";
  let str = myString.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      answer += str[i].toUpperCase();
    } else {
      answer += str[i];
    }
  }

  return answer;
}

console.log(solution("abstract algebra"));
console.log(solution("PrOgRaMmErS"));

// const solution=s=>s.toLowerCase().replaceAll('a','A');
