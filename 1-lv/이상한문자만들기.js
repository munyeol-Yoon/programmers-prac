//gdgdgdgdgdgd

// 입력된 문자를 단어별로 쪼개서 배열을 만든다.
// 반복문을 만들어 words 만큼 반복
// 반복문 안에 반복문을 만들어 words[i] 만큼 반복
// 조건문으로 홀수일씨 소문자로 만들어서 answer 에 더해줌
// 조건문으로 짝수일씨 대문자로 만들어서 answer 에 더해줌
// 바깥쪽 반복문에 안쪽 반복문이 끝나면 조건문을 하나 넣어줌
// 조건문을 만들어 answer 에 공백을 더해줌. 조건문은 words 길이 -1 에 해당하는 경우

function solution(s) {
  var answer = "";
  let words = s.split(" "); // s 를 받으면 공백을 기준으로 문자를 쪼갭니다. words = "try", "hello", "world"
  for (let i = 0; i < words.length; i++) {      // i = 0 가 words 가 "try" 가 들어갑니다.
    for (let j = 0; j < words[i].length; j++) { // "try" 를 기준으로 j만큼 반복합니다.
      if (j % 2 === 0) {                        // j를 2로 나눈 값이 0인지 아닌 지 기준으로 구분 합니다.
        answer += words[i][j].toUpperCase();    // j가 0 인 경우 words의 i번째 단어에 j 번째 글자를 대문자로 바꿔 answer 에 추가합니다. 이 때는 t 가 T 로 변경됩니다.
      } else {
        answer += words[i][j].toLowerCase();    // j가 0 이 아닌 경우 words의 i번째 단어에 j 번째 글자를 소문자로 바꿔 answer 에 추가합니다. 이 때 r이 r로 유지됩니다.
      }
    }
    if (i < words.length - 1) {                 // 모인 answer 의 index 사이마다 공백을 추가합니다. 단 마지막 index에는 공백을 추가할 필요가 없기 때문에 s의 길이에 '-1'을 추가합니다.
      answer += " ";
    }
  }

//   console.log(words);

  return answer;
}

console.log(solution("try hello world"));
