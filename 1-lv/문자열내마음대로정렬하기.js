//히히히히히히히히히히히히하하하하하하하하하히히하하하
//하핳하하핳gdgdgdgdgdgdgdg

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// // value 기준으로 정렬
// items.sort(function (a, b) {
//     if (a.value > b.value) {
//       return 1;
//     }
//     if (a.value < b.value) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   });

function solution(strings, n) {
  strings.sort(function (a, b) {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    }
    // a must be equal to b
  });

  return strings;
}

console.log(solution(["sun", "bed", "car"], 1));

// if (a[n] === b[n]) {
//     return 사전순 정렬??;
// }
