function solution(my_string, index_list) {
  let answer = "";

  for (let i = 0; i < index_list.length; i++) {
    answer += my_string[index_list[i]];
  }

  return answer;
}

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
console.log(solution("zpiaz", [1, 2, 0, 0, 3]));
