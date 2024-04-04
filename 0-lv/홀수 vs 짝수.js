function solution(num_list) {
  let answer = 0;
  let oven = 0;
  let odd = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      oven += num_list[i];
    } else {
      odd += num_list[i];
    }
  }

  return oven > odd ? (answer = oven) : (answer = odd);
}

console.log(solution([4, 2, 6, 1, 7, 6], 17));
console.log(solution([-1, 2, 5, 6, 3], 8));
