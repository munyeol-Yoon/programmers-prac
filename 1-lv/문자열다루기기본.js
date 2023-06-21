// gdgdgdgdgdgdgd
// h2h2h2h2h2h2h2h2h2h2h2h

function solution(s) {
  let bool = true;
  var arr = s.split("").map((i) => parseInt(i));

  if (arr.length === 4 || arr.length === 6) {
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        return false;
      }
    }
  } else {
    return false;
  }

  return bool;
}

console.log(solution("a234"));

// 대욱님 코드 ==================================

// function solution(s) {
//     var answer = true;

//     for (let i=0; i<s.length; i++) {
//       if (Number(s[i]) >= 0) { // '0123'도 true이므로 0이상
//         answer = true;
//       } else {
//         answer = false;
//         break
//       }
//     }

//     if (s.length !== 4 && s.length !==6) {
//       answer = false
//     }

//     return answer;
//   }
