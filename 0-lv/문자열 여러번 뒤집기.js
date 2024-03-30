function solution(my_string, queries) {
  let arr = my_string.split("");

  for (let i = 0; i < queries.length; i++) {
    let start = queries[i][0];
    let end = queries[i][1];

    for (let j = start; j <= (start + end) / 2; j++) {
      let temp = arr[j];
      arr[j] = arr[start + end - j];
      arr[start + end - j] = temp;
    }
  }

  return arr.join("");
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);

/*
function solution(my_string, queries) {
    let str = my_string.split('');
    queries.forEach(([start, end]) => {
        const changeStr = str.slice(start, end + 1);
        str.splice(start, changeStr.length, ...changeStr.reverse());
    });
    return str.join('');
}
*/
