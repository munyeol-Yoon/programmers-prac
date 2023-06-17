// 2016년
// ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ
//--------------------------------------------------------

// SUN,MON,TUE,WED,THU,FRI,SAT 배열 값을 가지는 변수를 만든다.
// date라는 변수에 new Date함수를 할당하고 인자 값 안에 2016,a,b 넣어준다.
// 해당 날짜에 맞는 요일을 반환.

function solution(a, b) {
  let answer = "";
  let dateVal = "2016-" + a + "- " + b;
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(dateVal);

  answer = week[date.getDay()];

  return answer;
}

console.log(solution(5, 24));
