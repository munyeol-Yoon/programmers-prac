// 부족한 금액 계산하기

//---------------------------------------------------------------- 화이팅!
// answer = 0  을 선언
// 반복문을 선언한다. count 번 까지 1 씩 증가한다.
// 반복문 안에서 answer 에 price * i 만큼 더해준다.
// 반복문을 빠져나가고 answer 에 money 를 빼준다.

// answer 를 리턴한다.

function solution(price, money, count) {
  var answer = 0;

  for (let i = 0; i <= count; i++) {
    answer += price * i;
  }

  return money > answer ? 0 : answer - money;
}

console.log(solution(3, 20, 4));
