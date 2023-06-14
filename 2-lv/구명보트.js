// // 최대 2명 탑승 가능, 최대한 많이 탈 수 있게
// // 제한 무게를 넘지 않아야함
// // 탐욕법 큰거부터 빼준다.
// function solution(people, limit) {
//   let answer = 0;
//   let sortPeopleArray = people.sort((a, b) => b - a);

//   console.log(sortPeopleArray);

//   // 배열 오름차순 정렬
//   // 반복문 안에서 해당 배열인덱스와 해당배열 인덱스 끝자리를 더했을 limit 보다 작거나 같으면
//   // answer 의 값을 1 올려주고 해당 값들을 지워준다.
//   // 아닌 경우 앞에 인덱스를 지워주고 answer 의 값을 1 올려준다.

//   // while 에 sortPeopleArray.length 를 넣어 배열이 없어지면 0 이기 때문에 배열이 비게될때까지 반복한다.
//   // 알아보니 shift() 는 pop() 과 다르게 가장 앞에 인덱스를 제거한다.
//   while (sortPeopleArray.length) {
//     console.log(sortPeopleArray);
//     if (
//       sortPeopleArray[0] + sortPeopleArray[sortPeopleArray.length - 1] <=
//       limit
//     ) {
//       sortPeopleArray.pop();
//       sortPeopleArray.shift();
//       answer++;
//     } else {
//       sortPeopleArray.shift();
//       answer++;
//     }
//   }

//   return answer;
// }

// console.log(solution([70, 50, 80, 50], 100));

// 메모리 시간초과가 발생했다.

// pop() 은 시간복잡도가 O(1) shift() 는 시간복잡도가 O(n) 이다 이때문에 시간 초과가 발생하는 것 같다.
// slice O(1) 이니까 한번 써보자 splice 도 O(n) 이다. ㄷㄷㄷㄷㄷㄷ

// function solution(people, limit) {
//   let answer = 0;
//   let sortPeopleArray = people.sort((a, b) => b - a);

// //   console.log(sortPeopleArray);

//   while (true) {
//     // console.log("while : " + sortPeopleArray); // [80, 70, 50, 50]
//     if (
//       sortPeopleArray[0] + sortPeopleArray[sortPeopleArray.length - 1] <=
//       limit
//     ) {
//     //   console.log("if: " + sortPeopleArray);
//       sortPeopleArray = sortPeopleArray.slice(1, sortPeopleArray.length - 1);
//       answer++;
//     } else {
//     //   console.log("else : " + sortPeopleArray);
//       sortPeopleArray = sortPeopleArray.slice(1, sortPeopleArray.length);
//       answer++;
//     }
//     if (sortPeopleArray.length === 0) {
//       break;
//     }
//   }

//   return answer;
// }

// console.log(solution([70, 50, 80, 50], 100));

// 2트 실패 ㅠㅠ 시간복잡도가 낮은 slice 를 사용하려고 했으나 값을 자꾸 재할당하면서 시간초과가 더 많이 발생하는가 싶다.

// 3트

function solution(people, limit) {
  let answer = 0;
  let sortPeopleArray = people.sort((a, b) => b - a);
  let j = sortPeopleArray.length - 1; // j 로 기준점을 만든다.
  for (let i = 0; i <= j; i++) {
    if (sortPeopleArray[i] + sortPeopleArray[j] <= limit) {
      j--;
    }
    answer++;
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));

/*
sortPeopleArray = [80, 70, 50, 50]
limit = 100
j 가 3라면
answer = 0

i = 0
80 + 50 <= 100 >> false
answer ++
j = 3


i = 1
70 + 50 <= 100 >> false
answer ++
j = 3


i = 2
50 + 50 <= 100 >> true
j -- >> j = 2
answer ++ 

return 3

*/
