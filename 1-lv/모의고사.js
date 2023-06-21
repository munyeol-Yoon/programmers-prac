// gdgdgdgdgdgdgdgdgdgdgd
// hhhhhhhhhhhhhhhhhhhhhh2222222222222222222222

// 첫번째 12345
// 두번째 2 2 2 2 2 2 2 2 사이에 1 3 4 5
// 세번째 3 1 2 4 5 숫자 두번씩

// 첫번째사람 배열, 두번째사람 배열, 세번째 사람 배열, 결과를 저장할 3크기의 배열 ex) result=[0,0,0] 만들고
// for 문 사용해서 answers 길이만큼 하는데 여기안에 조건문이 각각들어감
// 조건문에서 result 배열의 값을 맞춰서 숫자를 올려준다.

// answer 배열 선언
// Math.max(result)<- 가장 큰 점수
// for문(result를 순회 - 3번) => if result[i] === Max값 ->answer.push[i+1]
// answer 리턴

function solution(answers) {
  let pattern1 = [1, 2, 3, 4, 5];
  let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var answer = [];
  let result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === pattern1[i % 5]) {
      result[0] += 1;
    }
    if (answers[i] === pattern2[i % 8]) {
      result[1] += 1;
    }
    if (answers[i] === pattern3[i % 10]) {
      result[2] += 1;
    }
  }
  let win = Math.max(...result);

  for (let i = 0; i < result.length; i++) {
    if (result[i] === win) {
      answer.push(i + 1);
    }
  }
  return answer;
}

// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([2, 2, 2, 2, 2]));
