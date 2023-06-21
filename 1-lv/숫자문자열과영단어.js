// ㅜㅜ
//히히히히히히히히히히히히히히힣ㅇ히히히히힝히히히히히히히히히힣이히히히힝

function solution(s) {
  let arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < arr.length; i++) {
    let spl = s.split(arr[i]);
    s = spl.join(i);
    console.log(`${i} : ${spl}, ${s}`);
  }

  return parseInt(s);
}

// console.log(solution("one4seveneight"));
// console.log(solution("23four5six7"));
// console.log(solution("2three45sixseven"));
// console.log(solution("123"));
// console.log(solution("threethreethreethree"));

// ---
// let a = "one4seveneight";

// let arr2 = a.split("one");

// console.log(arr2); // [ '', '4seveneight' ]

// let b = arr2.join("1"); // '' + '1' + '4seveneight' = '14seveneight'
// console.log(b); // 14seveneight

// const arr = ["바람", "비", "물"];

// console.log(arr.join("-")); // >> 바람-비-물
