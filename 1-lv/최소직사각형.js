// gdgdgdgdgdgd

// 1. 명함을 가로가 제일 길도록 조정 (ex: 가로30, 세로60이면 눕혀서 -> 가로60,세로30 이 되도록)
// 2. -> 0번인덱스(가로)들의 Max값 * 1번인덱스(세로)들의 Max값

function solution(sizes) {
  let a = 0;
  let b = 0;

  for (let i of sizes) {
    if (i[0] > i[1]) {
      if (a < i[0]) a = i[0];
      if (b < i[1]) b = i[1];
    } else {
      if (a < i[1]) a = i[1];
      if (b < i[0]) b = i[0];
    }
  }
  console.log(a, b);

  return a * b;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
