// gdgdgdgd

//가능한 최저순위와 최고순위 를 배열에 담아 리턴
function order(number) {
  switch (number) {
    case 6:
      return 1;
      break;
    case 5:
      return 2;
      break;
    case 4:
      return 3;
      break;
    case 3:
      return 4;
      break;
    case 2:
      return 5;
      break;
    default:
      return 6;
      break;
  }
}

function solution(lottos, win_nums) {
  // step1: 최저부터 - 0인 경우 모두 continue(로또번호는 1부터이므로 자동으로 걸러짐)
  // step2: 최고순위 -> minCnt + zeroCnt
  let minCnt = 0;
  let zeroCnt = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.indexOf(lottos[i]) >= 0) {
      minCnt++;
    }
    if (lottos[i] === 0) {
      zeroCnt++;
    }
  }
  return [order(minCnt + zeroCnt), order(minCnt)];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
