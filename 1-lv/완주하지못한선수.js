// gdgdgdgdgdgdgd
// 정렬 -> for 비교 -> 정답

function solution(participant, completion) {
  participant.sort(); // 문자열만
  completion.sort();

  while (participant.length > 0) {
    let popValue = participant.pop();
    if (popValue !== completion.pop()) {
      return popValue;
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
