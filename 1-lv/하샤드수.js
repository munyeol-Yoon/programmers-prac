//gdgdgdgdgdgdgddgdgddgdg
// ?????????????????????????
//

// a, b 에 x[0], x[1] 을 int 타입으로 바꿔 저장
// a 와 b 를 더하고 더한 값이 x 와 나눠떨어지면 리턴 트루 아니면 펄스

function solution(x) {
  let c = x.toString().split(""); // 매서드의 리턴 값 유무를 잘 확인하기
  console.log(c);

  let sum = c.reduce((a, b) => Number(a) + Number(b));
  console.log(sum);
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(solution(1));
// console.log(solution(12));
console.log(solution(11));
// console.log(solution(10000));

function solution(x) {
  let c = x.toString().split(""); // 매서드의 리턴 값 유무를 잘 확인하기

  let sum = 0;

  for (let i = 0; i < c.length; i++) {
    sum += parseInt(c[i]);
  }

  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}
