// 직사각형 별찍기

/* 사용자가 숫자를 입력합니다. 입력시 띄어쓰기를 기준으로 첫번째 숫자는 a에 들어가고 두번째 숫자는 b에 들어갑니다. 
  각 배열에 들어간 숫자는 a에 들어간 숫자는 행을 b에 들어가는 숫자는 열을 가르킵니다.
  for 구문을 통해 첫번째 a의 숫자만큼 행으로 *을 출력하고
  for 구문 안에서 다시 for을 사용하여 b의 숫자만큼 열이 출력하게 합니다.*/

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    process.stdout.write("*");
    for (let j = 1; j < a; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
  // console.log(a);
  // console.log(b);
});
