function solution(my_string) {
  let answer = new Array(52).fill(0);

  for (const char of my_string) {
    if (char >= "A" && char <= "Z") {
      answer[char.charCodeAt(0) - "A".charCodeAt(0)]++;
    } else if (char >= "a" && char <= "z") {
      answer[26 + char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
  }

  return answer;
}

console.log(solution("Programmers"));

/*
 
function solution(m) {
    var answer = [];
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let a = [];
    a.length = 52;
    a.fill(0);

    m.split("").map((n)=>{
        a[al.indexOf(n)]+=1
    })

    return a;
}

function solution(my_string) {
    let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var answer = new Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++) {
        answer[alp.indexOf(my_string[i])]++;
    }
    return answer;
}

 */
